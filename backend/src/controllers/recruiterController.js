const recruiterService = require('../services/recruiterService');
const { sendSuccess } = require('../utils/response');

class RecruiterController {
  /**
   * POST /api/v1/recruiters
   */
  async createProfile(req, res, next) {
    try {
      const recruiter = await recruiterService.createProfile(req.user.id, req.body);
      return sendSuccess(res, { recruiter }, 'Recruiter profile created successfully', 201);
    } catch (error) {
      next(error);
    }
  }

  /**
   * GET /api/v1/recruiters/me
   */
  async getMyProfile(req, res, next) {
    try {
      const recruiter = await recruiterService.getRecruiterByUserId(req.user.id);
      return sendSuccess(res, { recruiter }, 'Recruiter profile retrieved successfully', 200);
    } catch (error) {
      next(error);
    }
  }

  /**
   * PUT /api/v1/recruiters/me
   */
  async updateMyProfile(req, res, next) {
    try {
      const currentRecruiter = await recruiterService.getRecruiterByUserId(req.user.id);
      const recruiter = await recruiterService.updateProfile(currentRecruiter.id, req.body);
      return sendSuccess(res, { recruiter }, 'Recruiter profile updated successfully', 200);
    } catch (error) {
      next(error);
    }
  }

  /**
   * GET /api/v1/recruiters/:id
   */
  async getRecruiterById(req, res, next) {
    try {
      const recruiter = await recruiterService.getRecruiterById(req.params.id);
      return sendSuccess(res, { recruiter }, 'Recruiter retrieved successfully', 200);
    } catch (error) {
      next(error);
    }
  }

  /**
   * PATCH /api/v1/recruiters/:id/verify
   */
  async verifyRecruiter(req, res, next) {
    try {
      const recruiter = await recruiterService.verifyRecruiter(req.params.id, req.body.isVerified);
      return sendSuccess(res, { recruiter }, 'Recruiter verification status updated', 200);
    } catch (error) {
      next(error);
    }
  }

  /**
   * GET /api/v1/recruiters
   */
  async getAllRecruiters(req, res, next) {
    try {
      const recruiters = await recruiterService.getAllRecruiters();
      return sendSuccess(res, { recruiters }, 'Recruiters retrieved successfully', 200);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new RecruiterController();
