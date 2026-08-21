const request = require('supertest');
const app = require('../src/app');
const { prisma } = require('../src/config/database');

describe('Auth Endpoints', () => {
  beforeAll(async () => {
    // Clear users before tests
    await prisma.user.deleteMany({});
  });

  afterAll(async () => {
    await prisma.user.deleteMany({});
    await prisma.$disconnect();
  });

  describe('POST /api/v1/auth/register', () => {
    it('should register a new student user successfully', async () => {
      const res = await request(app)
        .post('/api/v1/auth/register')
        .send({
          email: 'student@example.com',
          password: 'Password123!',
          role: 'STUDENT',
          profile: {
            firstName: 'Jane',
            lastName: 'Doe',
            department: 'Computer Science',
            cgpa: 8.9,
            graduationYear: 2026,
          },
        });

      expect(res.status).toBe(201);
      expect(res.body.success).toBe(true);
      expect(res.body.data).toHaveProperty('token');
      expect(res.body.data.user).toHaveProperty('id');
      expect(res.body.data.user.email).toBe('student@example.com');
      expect(res.body.data.user.student).toBeDefined();
      expect(res.body.data.user.student.firstName).toBe('Jane');
    });

    it('should reject registration with duplicate email', async () => {
      const res = await request(app)
        .post('/api/v1/auth/register')
        .send({
          email: 'student@example.com',
          password: 'AnotherPassword123!',
          role: 'STUDENT',
        });

      expect(res.status).toBe(409);
      expect(res.body.success).toBe(false);
    });

    it('should fail with invalid email or short password', async () => {
      const res = await request(app)
        .post('/api/v1/auth/register')
        .send({
          email: 'invalid-email',
          password: '123',
        });

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.errors).toBeDefined();
    });
  });

  describe('POST /api/v1/auth/login', () => {
    it('should login an existing user with valid credentials', async () => {
      const res = await request(app)
        .post('/api/v1/auth/login')
        .send({
          email: 'student@example.com',
          password: 'Password123!',
        });

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data).toHaveProperty('token');
    });

    it('should reject login with wrong password', async () => {
      const res = await request(app)
        .post('/api/v1/auth/login')
        .send({
          email: 'student@example.com',
          password: 'WrongPassword!',
        });

      expect(res.status).toBe(401);
      expect(res.body.success).toBe(false);
    });
  });

  describe('GET /api/v1/auth/me', () => {
    it('should get current user profile with valid Bearer token', async () => {
      const loginRes = await request(app)
        .post('/api/v1/auth/login')
        .send({
          email: 'student@example.com',
          password: 'Password123!',
        });

      const token = loginRes.body.data.token;

      const res = await request(app)
        .get('/api/v1/auth/me')
        .set('Authorization', `Bearer ${token}`);

      expect(res.status).toBe(200);
      expect(res.body.data.user.email).toBe('student@example.com');
    });

    it('should return 401 without Bearer token', async () => {
      const res = await request(app).get('/api/v1/auth/me');
      expect(res.status).toBe(401);
    });
  });
});
