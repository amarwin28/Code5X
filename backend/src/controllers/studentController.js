const studentService = require('../services/studentService');
const { sendSuccess, AppError } = require('../utils/response');

class StudentController {
  /**
   * POST /api/v1/students
   */
  async createProfile(req, res, next) {
    try {
      const student = await studentService.createProfile(req.user.id, req.body);
      return sendSuccess(res, { student }, 'Student profile created successfully', 201);
    } catch (error) {
      next(error);
    }
  }

  /**
   * GET /api/v1/students/me
   */
  async getMyProfile(req, res, next) {
    try {
      const student = await studentService.getStudentByUserId(req.user.id);
      return sendSuccess(res, { student }, 'Student profile retrieved successfully', 200);
    } catch (error) {
      next(error);
    }
  }

  /**
   * PUT /api/v1/students/me
   */
  async updateMyProfile(req, res, next) {
    try {
      const currentStudent = await studentService.getStudentByUserId(req.user.id);
      const student = await studentService.updateProfile(currentStudent.id, req.body);
      return sendSuccess(res, { student }, 'Student profile updated successfully', 200);
    } catch (error) {
      next(error);
    }
  }

  /**
   * GET /api/v1/students/:id
   */
  async getStudentById(req, res, next) {
    try {
      const student = await studentService.getStudentById(req.params.id);
      return sendSuccess(res, { student }, 'Student retrieved successfully', 200);
    } catch (error) {
      next(error);
    }
  }

  /**
   * GET /api/v1/students
   */
  async getAllStudents(req, res, next) {
    try {
      const result = await studentService.getAllStudents(req.query);
      return sendSuccess(res, result, 'Students retrieved successfully', 200);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new StudentController();
