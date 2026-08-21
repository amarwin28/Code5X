const { prisma } = require('../config/database');
const { AppError } = require('../utils/response');

class OpportunityService {
  /**
   * Create a new job/internship opportunity
   */
  async createOpportunity(recruiterId, opportunityData) {
    return prisma.opportunity.create({
      data: {
        recruiterId,
        ...opportunityData,
        deadline: new Date(opportunityData.deadline),
      },
      include: {
        recruiter: true,
      },
    });
  }

  /**
   * Update an existing opportunity
   */
  async updateOpportunity(id, recruiterId, updateData, isAdmin = false) {
    const opportunity = await prisma.opportunity.findUnique({
      where: { id },
    });

    if (!opportunity) {
      throw new AppError('Opportunity not found', 404);
    }

    if (!isAdmin && opportunity.recruiterId !== recruiterId) {
      throw new AppError('You are not authorized to update this opportunity', 403);
    }

    const data = { ...updateData };
    if (data.deadline) {
      data.deadline = new Date(data.deadline);
    }

    return prisma.opportunity.update({
      where: { id },
      data,
      include: {
        recruiter: true,
      },
    });
  }

  /**
   * Get single opportunity by ID
   */
  async getOpportunityById(id) {
    const opportunity = await prisma.opportunity.findUnique({
      where: { id },
      include: {
        recruiter: true,
        _count: {
          select: { applications: true, placements: true },
        },
      },
    });

    if (!opportunity) {
      throw new AppError('Opportunity not found', 404);
    }

    return opportunity;
  }

  /**
   * Query and filter opportunities
   */
  async getAllOpportunities(query = {}) {
    const {
      search,
      jobType,
      location,
      department,
      status = 'OPEN',
      page = 1,
      limit = 10,
    } = query;

    const where = {};

    if (status) {
      where.status = status;
    }

    if (jobType) {
      where.jobType = jobType;
    }

    if (location) {
      where.location = { contains: location };
    }

    if (department && department !== 'ALL') {
      where.OR = [
        { eligibleDepartments: { contains: department } },
        { eligibleDepartments: 'ALL' },
      ];
    }

    if (search) {
      where.OR = [
        { title: { contains: search } },
        { company: { contains: search } },
        { description: { contains: search } },
        { location: { contains: search } },
      ];
    }

    const skip = (parseInt(page, 10) - 1) * parseInt(limit, 10);
    const take = parseInt(limit, 10);

    const [opportunities, total] = await Promise.all([
      prisma.opportunity.findMany({
        where,
        skip,
        take,
        include: {
          recruiter: {
            select: {
              companyName: true,
              website: true,
              industry: true,
            },
          },
          _count: {
            select: { applications: true },
          },
        },
        orderBy: { createdAt: 'desc' },
      }),
      prisma.opportunity.count({ where }),
    ]);

    return {
      opportunities,
      pagination: {
        total,
        page: parseInt(page, 10),
        limit: take,
        totalPages: Math.ceil(total / take),
      },
    };
  }

  /**
   * Close or Archive an opportunity
   */
  async updateStatus(id, recruiterId, status, isAdmin = false) {
    const opportunity = await prisma.opportunity.findUnique({
      where: { id },
    });

    if (!opportunity) {
      throw new AppError('Opportunity not found', 404);
    }

    if (!isAdmin && opportunity.recruiterId !== recruiterId) {
      throw new AppError('You are not authorized to modify this opportunity', 403);
    }

    return prisma.opportunity.update({
      where: { id },
      data: { status },
    });
  }
}

module.exports = new OpportunityService();
