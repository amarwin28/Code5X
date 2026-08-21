const applicationService = require('../services/applicationService');
const studentService = require('../services/studentService');
const recruiterService = require('../services/recruiterService');
const { sendSuccess, AppError } = require('../utils/response');

class ApplicationController {
  /**
   * POST /api/v1/applications
   */
  async apply(req, res, next) {
    try {
      const student = await studentService.getStudentByUserId(req.user.id);
      const { opportunityId, resumeUrl, coverLetter } = req.body;

      const application = await applicationService.apply(student.id, opportunityId, {
        resumeUrl,
        coverLetter,
      });

      return sendSuccess(res, { application }, 'Application submitted successfully', 201);
    } catch (error) {
      next(error);
    }
  }

  /**
   * GET /api/v1/applications/my
   */
  async getMyApplications(req, res, next) {
    try {
      const student = await studentService.getStudentByUserId(req.user.id);
      const applications = await applicationService.getStudentApplications(student.id);
      return sendSuccess(res, { applications }, 'Applications retrieved successfully', 200);
    } catch (error) {
      next(error);
    }
  }

  /**
   * GET /api/v1/applications/opportunity/:opportunityId
   */
  async getOpportunityApplications(req, res, next) {
    try {
      let recruiterId = null;
      const isAdmin = req.user.role === 'ADMIN';

      if (!isAdmin) {
        const recruiter = await recruiterService.getRecruiterByUserId(req.user.id);
        recruiterId = recruiter.id;
      }

      const applications = await applicationService.getOpportunityApplications(
        req.params.opportunityId,
        recruiterId,
        isAdmin
      );

      return sendSuccess(res, { applications }, 'Opportunity applications retrieved', 200);
    } catch (error) {
      next(error);
    }
  }

  /**
   * PATCH /api/v1/applications/:id/status
   */
  async updateStatus(req, res, next) {
    try {
      const { status, remarks } = req.body;
      let recruiterId = null;
      const isAdmin = req.user.role === 'ADMIN';

      if (!isAdmin) {
        const recruiter = await recruiterService.getRecruiterByUserId(req.user.id);
        recruiterId = recruiter.id;
      }

      const application = await applicationService.updateStatus(
        req.params.id,
        recruiterId,
        status,
        remarks,
        isAdmin
      );

      return sendSuccess(res, { application }, 'Application status updated successfully', 200);
    } catch (error) {
      next(error);
    }
  }

  /**
   * GET /api/v1/applications
   */
  async getAllApplications(req, res, next) {
    try {
      const result = await applicationService.getAllApplications(req.query);
      return sendSuccess(res, result, 'Applications retrieved successfully', 200);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ApplicationController();
