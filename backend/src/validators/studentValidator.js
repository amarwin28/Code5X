const Joi = require('joi');

const createStudentSchema = Joi.object({
  firstName: Joi.string().trim().required().messages({
    'any.required': 'First name is required',
  }),
  lastName: Joi.string().trim().required().messages({
    'any.required': 'Last name is required',
  }),
  rollNumber: Joi.string().trim().optional().allow('', null),
  phone: Joi.string().trim().optional().allow('', null),
  department: Joi.string().trim().required().messages({
    'any.required': 'Department is required',
  }),
  cgpa: Joi.number().min(0).max(10).required().messages({
    'number.min': 'CGPA cannot be negative',
    'number.max': 'CGPA cannot exceed 10.0',
    'any.required': 'CGPA is required',
  }),
  graduationYear: Joi.number().integer().min(2000).max(2100).required().messages({
    'any.required': 'Graduation year is required',
  }),
  institutionId: Joi.string().uuid().optional().allow(null),
  resumeUrl: Joi.string().uri().optional().allow('', null),
  skills: Joi.string().optional().allow('', null),
});

const updateStudentSchema = Joi.object({
  firstName: Joi.string().trim().optional(),
  lastName: Joi.string().trim().optional(),
  rollNumber: Joi.string().trim().optional().allow('', null),
  phone: Joi.string().trim().optional().allow('', null),
  department: Joi.string().trim().optional(),
  cgpa: Joi.number().min(0).max(10).optional(),
  graduationYear: Joi.number().integer().min(2000).max(2100).optional(),
  institutionId: Joi.string().uuid().optional().allow(null),
  resumeUrl: Joi.string().uri().optional().allow('', null),
  skills: Joi.string().optional().allow('', null),
}).min(1);

const queryStudentsSchema = Joi.object({
  department: Joi.string().optional(),
  minCgpa: Joi.number().min(0).max(10).optional(),
  graduationYear: Joi.number().integer().optional(),
  institutionId: Joi.string().uuid().optional(),
  search: Joi.string().optional(),
  page: Joi.number().integer().min(1).default(1),
  limit: Joi.number().integer().min(1).max(100).default(10),
});

module.exports = {
  createStudentSchema,
  updateStudentSchema,
  queryStudentsSchema,
};
