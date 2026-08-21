const request = require('supertest');
const app = require('../src/app');
const { prisma } = require('../src/config/database');

describe('Student Endpoints', () => {
  let studentToken;
  let recruiterToken;
  let studentId;

  beforeAll(async () => {
    await prisma.application.deleteMany({});
    await prisma.student.deleteMany({});
    await prisma.user.deleteMany({});

    // Register a student user without profile
    const studentRes = await request(app)
      .post('/api/v1/auth/register')
      .send({
        email: 'student.profile@example.com',
        password: 'Password123!',
        role: 'STUDENT',
      });
    studentToken = studentRes.body.data.token;

    // Register recruiter
    const recruiterRes = await request(app)
      .post('/api/v1/auth/register')
      .send({
        email: 'recruiter.view@example.com',
        password: 'Password123!',
        role: 'RECRUITER',
        profile: {
          companyName: 'Tech Corp',
          recruiterName: 'Alex',
        },
      });
    recruiterToken = recruiterRes.body.data.token;
  });

  afterAll(async () => {
    await prisma.application.deleteMany({});
    await prisma.student.deleteMany({});
    await prisma.user.deleteMany({});
    await prisma.$disconnect();
  });

  it('should create student profile', async () => {
    const res = await request(app)
      .post('/api/v1/students')
      .set('Authorization', `Bearer ${studentToken}`)
      .send({
        firstName: 'John',
        lastName: 'Smith',
        rollNumber: 'CS2026-001',
        department: 'Computer Science',
        cgpa: 8.5,
        graduationYear: 2026,
        skills: 'JavaScript, Node.js, React',
      });

    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data.student.firstName).toBe('John');
    studentId = res.body.data.student.id;
  });

  it('should fetch own student profile via /students/me', async () => {
    const res = await request(app)
      .get('/api/v1/students/me')
      .set('Authorization', `Bearer ${studentToken}`);

    expect(res.status).toBe(200);
    expect(res.body.data.student.id).toBe(studentId);
    expect(res.body.data.student.department).toBe('Computer Science');
  });

  it('should update student profile via /students/me', async () => {
    const res = await request(app)
      .put('/api/v1/students/me')
      .set('Authorization', `Bearer ${studentToken}`)
      .send({
        cgpa: 9.1,
        skills: 'JavaScript, Node.js, React, Express, Prisma',
      });

    expect(res.status).toBe(200);
    expect(res.body.data.student.cgpa).toBe(9.1);
  });

  it('should allow recruiter to query students list', async () => {
    const res = await request(app)
      .get('/api/v1/students?department=Computer')
      .set('Authorization', `Bearer ${recruiterToken}`);

    expect(res.status).toBe(200);
    expect(res.body.data.students.length).toBeGreaterThanOrEqual(1);
  });

  it('should disallow student from querying all students list', async () => {
    const res = await request(app)
      .get('/api/v1/students')
      .set('Authorization', `Bearer ${studentToken}`);

    expect(res.status).toBe(403);
  });
});
