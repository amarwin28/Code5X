const placementService = require('../services/placementService');
const recruiterService = require('../services/recruiterService');
const { sendSuccess, AppError } = require('../utils/response');

class PlacementController {
  /**
   * POST /api/v1/placements
   */
  async recordPlacement(req, res, next) {
    try {
      let recruiterId;
      if (req.user.role === 'RECRUITER') {
        const recruiter = await recruiterService.getRecruiterByUserId(req.user.id);
        recruiterId = recruiter.id;
      } else if (['ADMIN', 'INSTITUTION'].includes(req.user.role) && req.body.recruiterId) {
        recruiterId = req.body.recruiterId;
      } else {
        throw new AppError('Unauthorized to record placement or missing recruiterId', 403);
      }

      const placement = await placementService.recordPlacement({
        ...req.body,
        recruiterId,
      });

      return sendSuccess(res, { placement }, 'Placement recorded successfully', 201);
    } catch (error) {
      next(error);
    }
  }

  /**
   * GET /api/v1/placements/:id
   */
  async getPlacementById(req, res, next) {
    try {
      const placement = await placementService.getPlacementById(req.params.id);
      return sendSuccess(res, { placement }, 'Placement retrieved successfully', 200);
    } catch (error) {
      next(error);
    }
  }

  /**
   * GET /api/v1/placements/analytics/overall
   */
  async getOverallAnalytics(req, res, next) {
    try {
      const analytics = await placementService.getOverallAnalytics();
      return sendSuccess(res, { analytics }, 'Placement analytics retrieved', 200);
    } catch (error) {
      next(error);
    }
  }

  /**
   * GET /api/v1/placements
   */
  async getAllPlacements(req, res, next) {
    try {
      const result = await placementService.getAllPlacements(req.query);
      return sendSuccess(res, result, 'Placements retrieved successfully', 200);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new PlacementController();
