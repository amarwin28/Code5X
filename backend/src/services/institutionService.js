const { prisma } = require('../config/database');
const { AppError } = require('../utils/response');

class InstitutionService {
  /**
   * Create institution profile for an authenticated user
   */
  async createProfile(userId, institutionData) {
    const existing = await prisma.institution.findUnique({
      where: { userId },
    });

    if (existing) {
      throw new AppError('Institution profile already exists for this user', 409);
    }

    const codeExists = await prisma.institution.findUnique({
      where: { code: institutionData.code },
    });

    if (codeExists) {
      throw new AppError('Institution with this code already exists', 409);
    }

    return prisma.institution.create({
      data: {
        userId,
        ...institutionData,
      },
    });
  }

  /**
   * Update institution profile
   */
  async updateProfile(institutionId, updateData) {
    const institution = await prisma.institution.findUnique({
      where: { id: institutionId },
    });

    if (!institution) {
      throw new AppError('Institution not found', 404);
    }

    if (updateData.code && updateData.code !== institution.code) {
      const codeExists = await prisma.institution.findUnique({
        where: { code: updateData.code },
      });
      if (codeExists) {
        throw new AppError('Institution with this code already exists', 409);
      }
    }

    return prisma.institution.update({
      where: { id: institutionId },
      data: updateData,
    });
  }

  /**
   * Get institution profile by ID
   */
  async getInstitutionById(id) {
    const institution = await prisma.institution.findUnique({
      where: { id },
      include: {
        students: {
          take: 20,
          orderBy: { cgpa: 'desc' },
        },
        placements: {
          include: {
            student: true,
            opportunity: true,
            recruiter: true,
          },
        },
      },
    });

    if (!institution) {
      throw new AppError('Institution not found', 404);
    }

    return institution;
  }

  /**
   * Get institution by user ID
   */
  async getInstitutionByUserId(userId) {
    const institution = await prisma.institution.findUnique({
      where: { userId },
      include: {
        students: true,
        placements: true,
      },
    });

    if (!institution) {
      throw new AppError('Institution profile not found for this user', 404);
    }

    return institution;
  }

  /**
   * Get placement analytics for an institution
   */
  async getInstitutionAnalytics(institutionId) {
    const totalStudents = await prisma.student.count({
      where: { institutionId },
    });

    const placements = await prisma.placement.findMany({
      where: { institutionId, status: 'CONFIRMED' },
      include: {
        opportunity: true,
        recruiter: true,
      },
    });

    const placedStudentIds = new Set(placements.map((p) => p.studentId));
    const totalPlaced = placedStudentIds.size;

    const packages = placements.map((p) => p.package);
    const highestPackage = packages.length > 0 ? Math.max(...packages) : 0;
    const averagePackage =
      packages.length > 0
        ? parseFloat((packages.reduce((a, b) => a + b, 0) / packages.length).toFixed(2))
        : 0;

    const placementRate =
      totalStudents > 0 ? parseFloat(((totalPlaced / totalStudents) * 100).toFixed(2)) : 0;

    return {
      institutionId,
      totalStudents,
      totalPlaced,
      placementRate: `${placementRate}%`,
      highestPackage,
      averagePackage,
      totalOffers: placements.length,
      recentPlacements: placements.slice(0, 10),
    };
  }

  /**
   * Get all registered institutions
   */
  async getAllInstitutions() {
    return prisma.institution.findMany({
      include: {
        _count: {
          select: { students: true, placements: true },
        },
      },
      orderBy: { name: 'asc' },
    });
  }
}

module.exports = new InstitutionService();
