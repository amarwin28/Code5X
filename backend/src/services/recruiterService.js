const { prisma } = require('../config/database');
const { AppError } = require('../utils/response');

class RecruiterService {
  /**
   * Create recruiter profile
   */
  async createProfile(userId, recruiterData) {
    const existing = await prisma.recruiter.findUnique({
      where: { userId },
    });

    if (existing) {
      throw new AppError('Recruiter profile already exists for this user', 409);
    }

    return prisma.recruiter.create({
      data: {
        userId,
        ...recruiterData,
      },
    });
  }

  /**
   * Update recruiter profile
   */
  async updateProfile(recruiterId, updateData) {
    const recruiter = await prisma.recruiter.findUnique({
      where: { id: recruiterId },
    });

    if (!recruiter) {
      throw new AppError('Recruiter profile not found', 404);
    }

    return prisma.recruiter.update({
      where: { id: recruiterId },
      data: updateData,
    });
  }

  /**
   * Get recruiter profile by ID
   */
  async getRecruiterById(id) {
    const recruiter = await prisma.recruiter.findUnique({
      where: { id },
      include: {
        opportunities: {
          include: {
            _count: {
              select: { applications: true, placements: true },
            },
          },
          orderBy: { createdAt: 'desc' },
        },
        placements: {
          include: {
            student: true,
          },
        },
      },
    });

    if (!recruiter) {
      throw new AppError('Recruiter not found', 404);
    }

    return recruiter;
  }

  /**
   * Get recruiter by User ID
   */
  async getRecruiterByUserId(userId) {
    const recruiter = await prisma.recruiter.findUnique({
      where: { userId },
      include: {
        opportunities: {
          include: {
            _count: {
              select: { applications: true, placements: true },
            },
          },
          orderBy: { createdAt: 'desc' },
        },
        placements: true,
      },
    });

    if (!recruiter) {
      throw new AppError('Recruiter profile not found for this user', 404);
    }

    return recruiter;
  }

  /**
   * Admin verification of recruiter
   */
  async verifyRecruiter(recruiterId, isVerified) {
    const recruiter = await prisma.recruiter.findUnique({
      where: { id: recruiterId },
    });

    if (!recruiter) {
      throw new AppError('Recruiter not found', 404);
    }

    return prisma.recruiter.update({
      where: { id: recruiterId },
      data: { isVerified },
    });
  }

  /**
   * List all recruiters
   */
  async getAllRecruiters() {
    return prisma.recruiter.findMany({
      include: {
        _count: {
          select: { opportunities: true, placements: true },
        },
      },
      orderBy: { companyName: 'asc' },
    });
  }
}

module.exports = new RecruiterService();
