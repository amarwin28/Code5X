const logger = require('../utils/logger');
const { sendError } = require('../utils/response');

/**
 * Global error handling middleware
 */
const errorHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Internal Server Error';
  let errors = err.errors || null;

  // Handle Prisma Known Request Errors
  if (err.code === 'P2002') {
    statusCode = 409;
    const target = err.meta?.target ? ` (${err.meta.target})` : '';
    message = `A record with this field value already exists${target}.`;
  } else if (err.code === 'P2025') {
    statusCode = 404;
    message = 'Requested record was not found.';
  } else if (err.name === 'JsonWebTokenError') {
    statusCode = 401;
    message = 'Invalid authentication token.';
  } else if (err.name === 'TokenExpiredError') {
    statusCode = 401;
    message = 'Authentication token has expired.';
  }

  if (process.env.NODE_ENV !== 'test' || statusCode >= 500) {
    logger.error(`[${req.method}] ${req.originalUrl} - ${statusCode} - ${message}`, statusCode >= 500 ? (err.stack || '') : '');
  }

  return sendError(res, message, statusCode, errors);
};

/**
 * 404 Not Found Route Handler
 */
const notFoundHandler = (req, res, next) => {
  return sendError(res, `Route ${req.originalUrl} not found`, 404);
};

module.exports = {
  errorHandler,
  notFoundHandler,
};
