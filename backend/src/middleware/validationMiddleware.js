const { AppError } = require('../utils/response');

/**
 * Validate incoming request object (body, query, params) against Joi schema
 * @param {import('joi').ObjectSchema} schema
 * @param {'body' | 'query' | 'params'} source
 */
const validate = (schema, source = 'body') => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req[source], {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      const formattedErrors = error.details.map((detail) => ({
        field: detail.path.join('.'),
        message: detail.message.replace(/"/g, ''),
      }));

      return next(new AppError('Validation failed', 400, formattedErrors));
    }

    req[source] = value;
    next();
  };
};

module.exports = {
  validate,
};
