const { prisma } = require('../config/database');
const { AppError } = require('../utils/response');

class StudentService {
  /**
   * Create student profile for an authenticated user
   */
  async createProfile(userId, studentData) {
    const existing = await prisma.student.findUnique({
      where: { userId },
    });

    if (existing) {
      throw new AppError('Student profile already exists for this user', 409);
    }

    return prisma.student.create({
      data: {
        userId,
        ...studentData,
      },
      include: {
        institution: true,
      },
    });
  }

  /**
   * Update student profile
   */
  async updateProfile(studentId, updateData) {
    const student = await prisma.student.findUnique({
      where: { id: studentId },
    });

    if (!student) {
      throw new AppError('Student profile not found', 404);
    }

    return prisma.student.update({
      where: { id: studentId },
      data: updateData,
      include: {
        institution: true,
      },
    });
  }

  /**
   * Get student profile by ID
   */
  async getStudentById(id) {
    const student = await prisma.student.findUnique({
      where: { id },
      include: {
        institution: true,
        applications: {
          include: {
            opportunity: true,
          },
        },
        placements: true,
      },
    });

    if (!student) {
      throw new AppError('Student not found', 404);
    }

    return student;
  }

  /**
   * Get student profile by User ID
   */
  async getStudentByUserId(userId) {
    const student = await prisma.student.findUnique({
      where: { userId },
      include: {
        institution: true,
        applications: {
          include: {
            opportunity: true,
          },
          orderBy: { appliedAt: 'desc' },
        },
        placements: true,
      },
    });

    if (!student) {
      throw new AppError('Student profile not found for this user', 404);
    }

    return student;
  }

  /**
   * Query / filter list of students with pagination
   */
  async getAllStudents(query = {}) {
    const {
      department,
      minCgpa,
      graduationYear,
      institutionId,
      search,
      page = 1,
      limit = 10,
    } = query;

    const where = {};

    if (department) {
      where.department = { contains: department };
    }

    if (minCgpa !== undefined) {
      where.cgpa = { gte: parseFloat(minCgpa) };
    }

    if (graduationYear) {
      where.graduationYear = parseInt(graduationYear, 10);
    }

    if (institutionId) {
      where.institutionId = institutionId;
    }

    if (search) {
      where.OR = [
        { firstName: { contains: search } },
        { lastName: { contains: search } },
        { rollNumber: { contains: search } },
        { skills: { contains: search } },
      ];
    }

    const skip = (parseInt(page, 10) - 1) * parseInt(limit, 10);
    const take = parseInt(limit, 10);

    const [students, total] = await Promise.all([
      prisma.student.findMany({
        where,
        skip,
        take,
        include: {
          institution: true,
          user: {
            select: { email: true, isActive: true },
          },
        },
        orderBy: { createdAt: 'desc' },
      }),
      prisma.student.count({ where }),
    ]);

    return {
      students,
      pagination: {
        total,
        page: parseInt(page, 10),
        limit: take,
        totalPages: Math.ceil(total / take),
      },
    };
  }
}

module.exports = new StudentService();
