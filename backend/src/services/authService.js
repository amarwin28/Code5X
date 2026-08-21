const { prisma } = require('../config/database');
const { hashPassword, comparePassword } = require('../utils/password');
const { signToken } = require('../utils/jwt');
const { AppError } = require('../utils/response');

class AuthService {
  /**
   * Register a new user and create corresponding role profile if provided
   */
  async register(data) {
    const { email, password, role = 'STUDENT', profile = {} } = data;

    const existingUser = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (existingUser) {
      throw new AppError('Email address is already registered', 409);
    }

    const hashedPassword = await hashPassword(password);

    const user = await prisma.user.create({
      data: {
        email: email.toLowerCase(),
        password: hashedPassword,
        role,
        ...(role === 'STUDENT' && profile.firstName
          ? {
              student: {
                create: {
                  firstName: profile.firstName,
                  lastName: profile.lastName || '',
                  department: profile.department || 'General',
                  cgpa: profile.cgpa || 0.0,
                  graduationYear: profile.graduationYear || new Date().getFullYear(),
                  rollNumber: profile.rollNumber,
                  phone: profile.phone,
                  institutionId: profile.institutionId,
                },
              },
            }
          : {}),
        ...(role === 'INSTITUTION' && profile.name
          ? {
              institution: {
                create: {
                  name: profile.name,
                  code: (profile.code || profile.name.slice(0, 4)).toUpperCase(),
                  contactEmail: profile.contactEmail || email,
                  phone: profile.phone,
                  address: profile.address,
                },
              },
            }
          : {}),
        ...(role === 'RECRUITER' && profile.companyName
          ? {
              recruiter: {
                create: {
                  companyName: profile.companyName,
                  recruiterName: profile.recruiterName || profile.companyName,
                  contactEmail: profile.contactEmail || email,
                  industry: profile.industry,
                  website: profile.website,
                },
              },
            }
          : {}),
      },
      include: {
        student: true,
        institution: true,
        recruiter: true,
      },
    });

    const token = signToken({ id: user.id, role: user.role, email: user.email });

    const { password: _, ...userWithoutPassword } = user;
    return {
      user: userWithoutPassword,
      token,
    };
  }

  /**
   * Login user with email and password
   */
  async login(email, password) {
    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
      include: {
        student: true,
        institution: true,
        recruiter: true,
      },
    });

    if (!user) {
      throw new AppError('Invalid email or password', 401);
    }

    if (!user.isActive) {
      throw new AppError('Account is deactivated. Please contact administrator.', 403);
    }

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      throw new AppError('Invalid email or password', 401);
    }

    const token = signToken({ id: user.id, role: user.role, email: user.email });

    const { password: _, ...userWithoutPassword } = user;
    return {
      user: userWithoutPassword,
      token,
    };
  }

  /**
   * Change user password
   */
  async changePassword(userId, currentPassword, newPassword) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new AppError('User not found', 404);
    }

    const isMatch = await comparePassword(currentPassword, user.password);
    if (!isMatch) {
      throw new AppError('Incorrect current password', 400);
    }

    const hashedNewPassword = await hashPassword(newPassword);

    await prisma.user.update({
      where: { id: userId },
      data: { password: hashedNewPassword },
    });

    return { message: 'Password updated successfully' };
  }

  /**
   * Get user profile by ID
   */
  async getCurrentUser(userId) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        student: {
          include: { institution: true },
        },
        institution: true,
        recruiter: true,
      },
    });

    if (!user) {
      throw new AppError('User not found', 404);
    }

    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
}

module.exports = new AuthService();
