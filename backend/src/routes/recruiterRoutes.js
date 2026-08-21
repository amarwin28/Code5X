const express = require('express');
const recruiterController = require('../controllers/recruiterController');
const { authenticate } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');
const { validate } = require('../middleware/validationMiddleware');
const {
  createRecruiterSchema,
  updateRecruiterSchema,
  verifyRecruiterSchema,
} = require('../validators/recruiterValidator');

const router = express.Router();

// Current recruiter profile
router.post(
  '/',
  authenticate,
  authorize('RECRUITER', 'ADMIN'),
  validate(createRecruiterSchema),
  recruiterController.createProfile
);

router.get('/me', authenticate, authorize('RECRUITER'), recruiterController.getMyProfile);
router.put(
  '/me',
  authenticate,
  authorize('RECRUITER'),
  validate(updateRecruiterSchema),
  recruiterController.updateMyProfile
);

// Admin verification
router.patch(
  '/:id/verify',
  authenticate,
  authorize('ADMIN'),
  validate(verifyRecruiterSchema),
  recruiterController.verifyRecruiter
);

// Discovery
router.get('/', authenticate, recruiterController.getAllRecruiters);
router.get('/:id', authenticate, recruiterController.getRecruiterById);

module.exports = router;
