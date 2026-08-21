const { prisma } = require('../config/database');
const { AppError } = require('../utils/response');

class PlacementService {
  /**
   * Record a new placement (when an applicant is hired)
   */
  async recordPlacement(data) {
    const { studentId, opportunityId, recruiterId, package: compensation, offerLetterUrl, institutionId } = data;

    // Check if student and opportunity exist
    const student = await prisma.student.findUnique({
      where: { id: studentId },
    });

    if (!student) {
      throw new AppError('Student not found', 404);
    }

    const opportunity = await prisma.opportunity.findUnique({
      where: { id: opportunityId },
    });

    if (!opportunity) {
      throw new AppError('Opportunity not found', 404);
    }

    const resolvedInstitutionId = institutionId || student.institutionId;

    return prisma.placement.create({
      data: {
        studentId,
        opportunityId,
        recruiterId,
        institutionId: resolvedInstitutionId,
        package: parseFloat(compensation),
        offerLetterUrl,
      },
      include: {
        student: true,
        opportunity: true,
        recruiter: true,
        institution: true,
      },
    });
  }

  /**
   * Get placement by ID
   */
  async getPlacementById(id) {
    const placement = await prisma.placement.findUnique({
      where: { id },
      include: {
        student: true,
        opportunity: true,
        recruiter: true,
        institution: true,
      },
    });

    if (!placement) {
      throw new AppError('Placement record not found', 404);
    }

    return placement;
  }

  /**
   * Get comprehensive placement analytics and statistics
   */
  async getOverallAnalytics() {
    const [totalPlacements, totalStudents, totalOpportunities, totalRecruiters] =
      await Promise.all([
        prisma.placement.count({ where: { status: 'CONFIRMED' } }),
        prisma.student.count(),
        prisma.opportunity.count(),
        prisma.recruiter.count(),
      ]);

    const confirmedPlacements = await prisma.placement.findMany({
      where: { status: 'CONFIRMED' },
      select: { package: true, placementDate: true },
    });

    const packages = confirmedPlacements.map((p) => p.package);
    const highestPackage = packages.length > 0 ? Math.max(...packages) : 0;
    const averagePackage =
      packages.length > 0
        ? parseFloat((packages.reduce((a, b) => a + b, 0) / packages.length).toFixed(2))
        : 0;

    return {
      totalPlacements,
      totalStudents,
      totalOpportunities,
      totalRecruiters,
      highestPackage,
      averagePackage,
      overallPlacementRate:
        totalStudents > 0
          ? `${((totalPlacements / totalStudents) * 100).toFixed(2)}%`
          : '0%',
    };
  }

  /**
   * Query placements with filters
   */
  async getAllPlacements(query = {}) {
    const { studentId, institutionId, recruiterId, status, page = 1, limit = 10 } = query;
    const where = {};

    if (studentId) where.studentId = studentId;
    if (institutionId) where.institutionId = institutionId;
    if (recruiterId) where.recruiterId = recruiterId;
    if (status) where.status = status;

    const skip = (parseInt(page, 10) - 1) * parseInt(limit, 10);
    const take = parseInt(limit, 10);

    const [placements, total] = await Promise.all([
      prisma.placement.findMany({
        where,
        skip,
        take,
        include: {
          student: true,
          opportunity: true,
          recruiter: true,
          institution: true,
        },
        orderBy: { placementDate: 'desc' },
      }),
      prisma.placement.count({ where }),
    ]);

    return {
      placements,
      pagination: {
        total,
        page: parseInt(page, 10),
        limit: take,
        totalPages: Math.ceil(total / take),
      },
    };
  }
}

module.exports = new PlacementService();
