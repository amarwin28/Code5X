const jwt = require('jsonwebtoken');
const env = require('../config/env');

/**
 * Generate a JWT token
 * @param {object} payload
 * @param {object} [options]
 * @returns {string}
 */
const signToken = (payload, options = {}) => {
  return jwt.sign(payload, env.JWT_SECRET, {
    expiresIn: env.JWT_EXPIRES_IN,
    ...options,
  });
};

/**
 * Verify a JWT token
 * @param {string} token
 * @returns {object}
 */
const verifyToken = (token) => {
  return jwt.verify(token, env.JWT_SECRET);
};

module.exports = {
  signToken,
  verifyToken,
};
