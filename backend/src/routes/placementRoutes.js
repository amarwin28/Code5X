const express = require('express');
const placementController = require('../controllers/placementController');
const { authenticate } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');

const router = express.Router();

// Record confirmed placement (Recruiter, Institution, Admin)
router.post(
  '/',
  authenticate,
  authorize('RECRUITER', 'ADMIN', 'INSTITUTION'),
  placementController.recordPlacement
);

// Get overall placement analytics
router.get('/analytics/overall', authenticate, placementController.getOverallAnalytics);

// Query placements
router.get('/', authenticate, placementController.getAllPlacements);

// Get single placement details
router.get('/:id', authenticate, placementController.getPlacementById);

module.exports = router;
