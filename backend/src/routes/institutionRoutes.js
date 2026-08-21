const express = require('express');
const institutionController = require('../controllers/institutionController');
const { authenticate } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');
const { validate } = require('../middleware/validationMiddleware');
const {
  createInstitutionSchema,
  updateInstitutionSchema,
} = require('../validators/institutionValidator');

const router = express.Router();

// Current institution profile
router.post(
  '/',
  authenticate,
  authorize('INSTITUTION', 'ADMIN'),
  validate(createInstitutionSchema),
  institutionController.createProfile
);

router.get('/me', authenticate, authorize('INSTITUTION'), institutionController.getMyProfile);
router.put(
  '/me',
  authenticate,
  authorize('INSTITUTION'),
  validate(updateInstitutionSchema),
  institutionController.updateMyProfile
);

// Public / Authenticated discovery
router.get('/', authenticate, institutionController.getAllInstitutions);
router.get('/:id', authenticate, institutionController.getInstitutionById);
router.get('/:id/analytics', authenticate, institutionController.getAnalytics);

module.exports = router;
