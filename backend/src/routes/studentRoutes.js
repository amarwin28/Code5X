const express = require('express');
const studentController = require('../controllers/studentController');
const { authenticate } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');
const { validate } = require('../middleware/validationMiddleware');
const {
  createStudentSchema,
  updateStudentSchema,
  queryStudentsSchema,
} = require('../validators/studentValidator');

const router = express.Router();

// Current student profile
router.post(
  '/',
  authenticate,
  authorize('STUDENT', 'ADMIN'),
  validate(createStudentSchema),
  studentController.createProfile
);

router.get('/me', authenticate, authorize('STUDENT'), studentController.getMyProfile);
router.put(
  '/me',
  authenticate,
  authorize('STUDENT'),
  validate(updateStudentSchema),
  studentController.updateMyProfile
);

// Query students (Institution, Recruiter, Admin)
router.get(
  '/',
  authenticate,
  authorize('INSTITUTION', 'RECRUITER', 'ADMIN'),
  validate(queryStudentsSchema, 'query'),
  studentController.getAllStudents
);

router.get('/:id', authenticate, studentController.getStudentById);

module.exports = router;
