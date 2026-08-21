const express = require('express');
const applicationController = require('../controllers/applicationController');
const { authenticate } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');
const { validate } = require('../middleware/validationMiddleware');
const {
  applyOpportunitySchema,
  updateApplicationStatusSchema,
  queryApplicationsSchema,
} = require('../validators/applicationValidator');

const router = express.Router();

// Student applies for an opportunity
router.post(
  '/',
  authenticate,
  authorize('STUDENT'),
  validate(applyOpportunitySchema),
  applicationController.apply
);

// Student views their own submitted applications
router.get(
  '/my',
  authenticate,
  authorize('STUDENT'),
  applicationController.getMyApplications
);

// Recruiter/Admin views applicants for a specific opportunity
router.get(
  '/opportunity/:opportunityId',
  authenticate,
  authorize('RECRUITER', 'ADMIN', 'INSTITUTION'),
  applicationController.getOpportunityApplications
);

// Recruiter/Admin updates application status
router.patch(
  '/:id/status',
  authenticate,
  authorize('RECRUITER', 'ADMIN'),
  validate(updateApplicationStatusSchema),
  applicationController.updateStatus
);

// Admin / Institution query all applications
router.get(
  '/',
  authenticate,
  authorize('ADMIN', 'INSTITUTION'),
  validate(queryApplicationsSchema, 'query'),
  applicationController.getAllApplications
);

module.exports = router;
