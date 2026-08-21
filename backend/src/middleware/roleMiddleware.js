const { AppError } = require('../utils/response');

/**
 * Role-based authorization middleware
 * @param  {...string} allowedRoles
 */
const authorize = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return next(new AppError('User not authenticated.', 401));
    }

    if (!allowedRoles.includes(req.user.role)) {
      return next(
        new AppError(
          `Forbidden: Role '${req.user.role}' does not have access to this resource.`,
          403
        )
      );
    }

    next();
  };
};

module.exports = {
  authorize,
};
