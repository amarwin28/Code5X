const opportunityService = require('../services/opportunityService');
const recruiterService = require('../services/recruiterService');
const { sendSuccess, AppError } = require('../utils/response');

class OpportunityController {
  /**
   * POST /api/v1/opportunities
   */
  async createOpportunity(req, res, next) {
    try {
      let recruiterId;
      if (req.user.role === 'RECRUITER') {
        const recruiter = await recruiterService.getRecruiterByUserId(req.user.id);
        recruiterId = recruiter.id;
      } else if (req.user.role === 'ADMIN' && req.body.recruiterId) {
        recruiterId = req.body.recruiterId;
      } else {
        throw new AppError('Only recruiters or admins can create opportunities', 403);
      }

      const opportunity = await opportunityService.createOpportunity(recruiterId, req.body);
      return sendSuccess(res, { opportunity }, 'Opportunity created successfully', 201);
    } catch (error) {
      next(error);
    }
  }

  /**
   * PUT /api/v1/opportunities/:id
   */
  async updateOpportunity(req, res, next) {
    try {
      let recruiterId = null;
      const isAdmin = req.user.role === 'ADMIN';

      if (!isAdmin) {
        const recruiter = await recruiterService.getRecruiterByUserId(req.user.id);
        recruiterId = recruiter.id;
      }

      const opportunity = await opportunityService.updateOpportunity(
        req.params.id,
        recruiterId,
        req.body,
        isAdmin
      );

      return sendSuccess(res, { opportunity }, 'Opportunity updated successfully', 200);
    } catch (error) {
      next(error);
    }
  }

  /**
   * GET /api/v1/opportunities/:id
   */
  async getOpportunityById(req, res, next) {
    try {
      const opportunity = await opportunityService.getOpportunityById(req.params.id);
      return sendSuccess(res, { opportunity }, 'Opportunity retrieved successfully', 200);
    } catch (error) {
      next(error);
    }
  }

  /**
   * GET /api/v1/opportunities
   */
  async getAllOpportunities(req, res, next) {
    try {
      const result = await opportunityService.getAllOpportunities(req.query);
      return sendSuccess(res, result, 'Opportunities retrieved successfully', 200);
    } catch (error) {
      next(error);
    }
  }

  /**
   * PATCH /api/v1/opportunities/:id/status
   */
  async updateStatus(req, res, next) {
    try {
      const { status } = req.body;
      let recruiterId = null;
      const isAdmin = req.user.role === 'ADMIN';

      if (!isAdmin) {
        const recruiter = await recruiterService.getRecruiterByUserId(req.user.id);
        recruiterId = recruiter.id;
      }

      const opportunity = await opportunityService.updateStatus(
        req.params.id,
        recruiterId,
        status,
        isAdmin
      );

      return sendSuccess(res, { opportunity }, 'Opportunity status updated successfully', 200);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new OpportunityController();
