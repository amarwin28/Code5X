const { prisma } = require('../config/database');
const { AppError } = require('../utils/response');

class ApplicationService {
  /**
   * Submit an application for an opportunity
   */
  async apply(studentId, opportunityId, applicationData = {}) {
    const student = await prisma.student.findUnique({
      where: { id: studentId },
    });

    if (!student) {
      throw new AppError('Student profile not found. Please create your profile first.', 404);
    }

    const opportunity = await prisma.opportunity.findUnique({
      where: { id: opportunityId },
    });

    if (!opportunity) {
      throw new AppError('Opportunity not found', 404);
    }

    if (opportunity.status !== 'OPEN') {
      throw new AppError(`Cannot apply. This opportunity is ${opportunity.status.toLowerCase()}.`, 400);
    }

    if (new Date() > new Date(opportunity.deadline)) {
      throw new AppError('Application deadline has passed.', 400);
    }

    // Eligibility check: CGPA
    if (student.cgpa < opportunity.minCgpa) {
      throw new AppError(
        `Ineligible: Minimum CGPA required is ${opportunity.minCgpa}, but your CGPA is ${student.cgpa}.`,
        400
      );
    }

    // Eligibility check: Department
    if (
      opportunity.eligibleDepartments !== 'ALL' &&
      !opportunity.eligibleDepartments.toLowerCase().includes(student.department.toLowerCase())
    ) {
      throw new AppError(
        `Ineligible: This opportunity is open for departments (${opportunity.eligibleDepartments}), but your department is ${student.department}.`,
        400
      );
    }

    // Check duplicate application
    const existingApplication = await prisma.application.findUnique({
      where: {
        opportunityId_studentId: {
          opportunityId,
          studentId,
        },
      },
    });

    if (existingApplication) {
      throw new AppError('You have already applied for this opportunity', 409);
    }

    return prisma.application.create({
      data: {
        opportunityId,
        studentId,
        resumeUrl: applicationData.resumeUrl || student.resumeUrl,
        coverLetter: applicationData.coverLetter,
      },
      include: {
        opportunity: true,
        student: true,
      },
    });
  }

  /**
   * Get applications of a specific student
   */
  async getStudentApplications(studentId) {
    return prisma.application.findMany({
      where: { studentId },
      include: {
        opportunity: {
          include: {
            recruiter: {
              select: {
                companyName: true,
                website: true,
              },
            },
          },
        },
      },
      orderBy: { appliedAt: 'desc' },
    });
  }

  /**
   * Get all applicants for a specific opportunity (for Recruiter/Admin)
   */
  async getOpportunityApplications(opportunityId, recruiterId, isAdmin = false) {
    const opportunity = await prisma.opportunity.findUnique({
      where: { id: opportunityId },
    });

    if (!opportunity) {
      throw new AppError('Opportunity not found', 404);
    }

    if (!isAdmin && opportunity.recruiterId !== recruiterId) {
      throw new AppError('You do not have permission to view applicants for this opportunity', 403);
    }

    return prisma.application.findMany({
      where: { opportunityId },
      include: {
        student: {
          include: {
            institution: true,
            user: { select: { email: true } },
          },
        },
      },
      orderBy: { appliedAt: 'desc' },
    });
  }

  /**
   * Update application status (Shortlist, Reject, Accept, etc.)
   */
  async updateStatus(applicationId, recruiterId, status, remarks, isAdmin = false) {
    const application = await prisma.application.findUnique({
      where: { id: applicationId },
      include: { opportunity: true },
    });

    if (!application) {
      throw new AppError('Application not found', 404);
    }

    if (!isAdmin && application.opportunity.recruiterId !== recruiterId) {
      throw new AppError('You do not have permission to update this application', 403);
    }

    return prisma.application.update({
      where: { id: applicationId },
      data: {
        status,
        ...(remarks !== undefined ? { remarks } : {}),
      },
      include: {
        student: true,
        opportunity: true,
      },
    });
  }

  /**
   * Query all applications with filters and pagination
   */
  async getAllApplications(query = {}) {
    const { status, opportunityId, studentId, page = 1, limit = 10 } = query;
    const where = {};

    if (status) where.status = status;
    if (opportunityId) where.opportunityId = opportunityId;
    if (studentId) where.studentId = studentId;

    const skip = (parseInt(page, 10) - 1) * parseInt(limit, 10);
    const take = parseInt(limit, 10);

    const [applications, total] = await Promise.all([
      prisma.application.findMany({
        where,
        skip,
        take,
        include: {
          student: true,
          opportunity: true,
        },
        orderBy: { appliedAt: 'desc' },
      }),
      prisma.application.count({ where }),
    ]);

    return {
      applications,
      pagination: {
        total,
        page: parseInt(page, 10),
        limit: take,
        totalPages: Math.ceil(total / take),
      },
    };
  }
}

module.exports = new ApplicationService();
