const Joi = require('joi');

const createOpportunitySchema = Joi.object({
  title: Joi.string().trim().required().messages({
    'any.required': 'Opportunity title is required',
  }),
  description: Joi.string().trim().required().messages({
    'any.required': 'Description is required',
  }),
  company: Joi.string().trim().required().messages({
    'any.required': 'Company name is required',
  }),
  jobType: Joi.string()
    .valid('FULL_TIME', 'INTERNSHIP', 'PART_TIME', 'CONTRACT')
    .default('FULL_TIME'),
  location: Joi.string().trim().required().messages({
    'any.required': 'Location is required',
  }),
  salary: Joi.string().trim().required().messages({
    'any.required': 'Salary/Stipend information is required',
  }),
  minCgpa: Joi.number().min(0).max(10).default(0.0),
  eligibleDepartments: Joi.string().trim().default('ALL'),
  deadline: Joi.date().iso().greater('now').required().messages({
    'date.greater': 'Deadline must be a future date',
    'any.required': 'Application deadline is required',
  }),
});

const updateOpportunitySchema = Joi.object({
  title: Joi.string().trim().optional(),
  description: Joi.string().trim().optional(),
  company: Joi.string().trim().optional(),
  jobType: Joi.string().valid('FULL_TIME', 'INTERNSHIP', 'PART_TIME', 'CONTRACT').optional(),
  location: Joi.string().trim().optional(),
  salary: Joi.string().trim().optional(),
  minCgpa: Joi.number().min(0).max(10).optional(),
  eligibleDepartments: Joi.string().trim().optional(),
  deadline: Joi.date().iso().optional(),
  status: Joi.string().valid('OPEN', 'CLOSED', 'ARCHIVED').optional(),
}).min(1);

const queryOpportunitiesSchema = Joi.object({
  search: Joi.string().optional(),
  jobType: Joi.string().optional(),
  location: Joi.string().optional(),
  department: Joi.string().optional(),
  status: Joi.string().valid('OPEN', 'CLOSED', 'ARCHIVED').optional(),
  page: Joi.number().integer().min(1).default(1),
  limit: Joi.number().integer().min(1).max(100).default(10),
});

module.exports = {
  createOpportunitySchema,
  updateOpportunitySchema,
  queryOpportunitiesSchema,
};
