const { verifyToken } = require('../utils/jwt');
const { AppError } = require('../utils/response');
const { prisma } = require('../config/database');

/**
 * Authentication middleware verifying Bearer JWT token
 */
const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new AppError('Authentication required. Please provide a Bearer token.', 401);
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
      throw new AppError('Token is missing.', 401);
    }

    const decoded = verifyToken(token);

    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      include: {
        student: true,
        institution: true,
        recruiter: true,
      },
    });

    if (!user) {
      throw new AppError('User belonging to this token no longer exists.', 401);
    }

    if (!user.isActive) {
      throw new AppError('User account is deactivated.', 403);
    }

    // Attach sanitized user object to request
    const { password, ...userWithoutPassword } = user;
    req.user = userWithoutPassword;

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  authenticate,
};
