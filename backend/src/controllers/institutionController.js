const institutionService = require('../services/institutionService');
const { sendSuccess } = require('../utils/response');

class InstitutionController {
  /**
   * POST /api/v1/institutions
   */
  async createProfile(req, res, next) {
    try {
      const institution = await institutionService.createProfile(req.user.id, req.body);
      return sendSuccess(res, { institution }, 'Institution profile created successfully', 201);
    } catch (error) {
      next(error);
    }
  }

  /**
   * GET /api/v1/institutions/me
   */
  async getMyProfile(req, res, next) {
    try {
      const institution = await institutionService.getInstitutionByUserId(req.user.id);
      return sendSuccess(res, { institution }, 'Institution profile retrieved successfully', 200);
    } catch (error) {
      next(error);
    }
  }

  /**
   * PUT /api/v1/institutions/me
   */
  async updateMyProfile(req, res, next) {
    try {
      const currentInstitution = await institutionService.getInstitutionByUserId(req.user.id);
      const institution = await institutionService.updateProfile(currentInstitution.id, req.body);
      return sendSuccess(res, { institution }, 'Institution profile updated successfully', 200);
    } catch (error) {
      next(error);
    }
  }

  /**
   * GET /api/v1/institutions/:id
   */
  async getInstitutionById(req, res, next) {
    try {
      const institution = await institutionService.getInstitutionById(req.params.id);
      return sendSuccess(res, { institution }, 'Institution retrieved successfully', 200);
    } catch (error) {
      next(error);
    }
  }

  /**
   * GET /api/v1/institutions/:id/analytics
   */
  async getAnalytics(req, res, next) {
    try {
      const analytics = await institutionService.getInstitutionAnalytics(req.params.id);
      return sendSuccess(res, { analytics }, 'Analytics retrieved successfully', 200);
    } catch (error) {
      next(error);
    }
  }

  /**
   * GET /api/v1/institutions
   */
  async getAllInstitutions(req, res, next) {
    try {
      const institutions = await institutionService.getAllInstitutions();
      return sendSuccess(res, { institutions }, 'Institutions retrieved successfully', 200);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new InstitutionController();
