const Joi = require('joi');

const createInstitutionSchema = Joi.object({
  name: Joi.string().trim().required().messages({
    'any.required': 'Institution name is required',
  }),
  code: Joi.string().trim().uppercase().required().messages({
    'any.required': 'Institution code is required',
  }),
  address: Joi.string().trim().optional().allow('', null),
  contactEmail: Joi.string().email().required().messages({
    'string.email': 'Please provide a valid contact email',
    'any.required': 'Contact email is required',
  }),
  phone: Joi.string().trim().optional().allow('', null),
  coordinatorName: Joi.string().trim().optional().allow('', null),
  coordinatorEmail: Joi.string().email().optional().allow('', null),
});

const updateInstitutionSchema = Joi.object({
  name: Joi.string().trim().optional(),
  code: Joi.string().trim().uppercase().optional(),
  address: Joi.string().trim().optional().allow('', null),
  contactEmail: Joi.string().email().optional(),
  phone: Joi.string().trim().optional().allow('', null),
  coordinatorName: Joi.string().trim().optional().allow('', null),
  coordinatorEmail: Joi.string().email().optional().allow('', null),
}).min(1);

module.exports = {
  createInstitutionSchema,
  updateInstitutionSchema,
};
