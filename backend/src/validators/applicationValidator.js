const Joi = require('joi');

const applyOpportunitySchema = Joi.object({
  opportunityId: Joi.string().uuid().required().messages({
    'any.required': 'Opportunity ID is required',
  }),
  resumeUrl: Joi.string().uri().optional().allow('', null),
  coverLetter: Joi.string().trim().max(2000).optional().allow('', null),
});

const updateApplicationStatusSchema = Joi.object({
  status: Joi.string()
    .valid('APPLIED', 'SHORTLISTED', 'INTERVIEW_SCHEDULED', 'REJECTED', 'ACCEPTED')
    .required()
    .messages({
      'any.required': 'Application status is required',
    }),
  remarks: Joi.string().trim().max(1000).optional().allow('', null),
});

const queryApplicationsSchema = Joi.object({
  status: Joi.string().valid('APPLIED', 'SHORTLISTED', 'INTERVIEW_SCHEDULED', 'REJECTED', 'ACCEPTED').optional(),
  opportunityId: Joi.string().uuid().optional(),
  studentId: Joi.string().uuid().optional(),
  page: Joi.number().integer().min(1).default(1),
  limit: Joi.number().integer().min(1).max(100).default(10),
});

module.exports = {
  applyOpportunitySchema,
  updateApplicationStatusSchema,
  queryApplicationsSchema,
};
