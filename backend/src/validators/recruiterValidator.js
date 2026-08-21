const Joi = require('joi');

const createRecruiterSchema = Joi.object({
  companyName: Joi.string().trim().required().messages({
    'any.required': 'Company name is required',
  }),
  industry: Joi.string().trim().optional().allow('', null),
  website: Joi.string().uri().optional().allow('', null),
  recruiterName: Joi.string().trim().required().messages({
    'any.required': 'Recruiter contact person name is required',
  }),
  contactEmail: Joi.string().email().required().messages({
    'string.email': 'Please provide a valid contact email',
    'any.required': 'Contact email is required',
  }),
  phone: Joi.string().trim().optional().allow('', null),
});

const updateRecruiterSchema = Joi.object({
  companyName: Joi.string().trim().optional(),
  industry: Joi.string().trim().optional().allow('', null),
  website: Joi.string().uri().optional().allow('', null),
  recruiterName: Joi.string().trim().optional(),
  contactEmail: Joi.string().email().optional(),
  phone: Joi.string().trim().optional().allow('', null),
}).min(1);

const verifyRecruiterSchema = Joi.object({
  isVerified: Joi.boolean().required().messages({
    'any.required': 'isVerified boolean is required',
  }),
});

module.exports = {
  createRecruiterSchema,
  updateRecruiterSchema,
  verifyRecruiterSchema,
};
