const express = require('express');
const opportunityController = require('../controllers/opportunityController');
const { authenticate } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');
const { validate } = require('../middleware/validationMiddleware');
const {
  createOpportunitySchema,
  updateOpportunitySchema,
  queryOpportunitiesSchema,
} = require('../validators/opportunityValidator');

const router = express.Router();

// List & Search opportunities (all authenticated users)
router.get(
  '/',
  authenticate,
  validate(queryOpportunitiesSchema, 'query'),
  opportunityController.getAllOpportunities
);

// Get single opportunity
router.get('/:id', authenticate, opportunityController.getOpportunityById);

// Create opportunity (Recruiter or Admin)
router.post(
  '/',
  authenticate,
  authorize('RECRUITER', 'ADMIN'),
  validate(createOpportunitySchema),
  opportunityController.createOpportunity
);

// Update opportunity
router.put(
  '/:id',
  authenticate,
  authorize('RECRUITER', 'ADMIN'),
  validate(updateOpportunitySchema),
  opportunityController.updateOpportunity
);

// Change opportunity status (OPEN, CLOSED, ARCHIVED)
router.patch(
  '/:id/status',
  authenticate,
  authorize('RECRUITER', 'ADMIN'),
  opportunityController.updateStatus
);

module.exports = router;
