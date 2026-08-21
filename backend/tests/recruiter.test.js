const request = require('supertest');
const app = require('../src/app');
const { prisma } = require('../src/config/database');

describe('Recruiter Endpoints', () => {
  let recruiterToken;
  let adminToken;
  let recruiterId;

  beforeAll(async () => {
    await prisma.placement.deleteMany({});
    await prisma.application.deleteMany({});
    await prisma.opportunity.deleteMany({});
    await prisma.recruiter.deleteMany({});
    await prisma.user.deleteMany({});

    // Register Recruiter
    const recUser = await request(app)
      .post('/api/v1/auth/register')
      .send({
        email: 'hiring@globex.com',
        password: 'Password123!',
        role: 'RECRUITER',
        profile: {
          companyName: 'Globex Corporation',
          recruiterName: 'Hank Scorpio',
          contactEmail: 'scorpio@globex.com',
        },
      });

    recruiterToken = recUser.body.data.token;
    recruiterId = recUser.body.data.user.recruiter.id;

    // Register Admin
    const adminUser = await request(app)
      .post('/api/v1/auth/register')
      .send({
        email: 'admin@system.com',
        password: 'Password123!',
        role: 'ADMIN',
      });

    adminToken = adminUser.body.data.token;
  });

  afterAll(async () => {
    await prisma.placement.deleteMany({});
    await prisma.application.deleteMany({});
    await prisma.opportunity.deleteMany({});
    await prisma.recruiter.deleteMany({});
    await prisma.user.deleteMany({});
    await prisma.$disconnect();
  });

  it('should fetch own recruiter profile via /recruiters/me', async () => {
    const res = await request(app)
      .get('/api/v1/recruiters/me')
      .set('Authorization', `Bearer ${recruiterToken}`);

    expect(res.status).toBe(200);
    expect(res.body.data.recruiter.companyName).toBe('Globex Corporation');
  });

  it('should allow admin to verify a recruiter', async () => {
    const res = await request(app)
      .patch(`/api/v1/recruiters/${recruiterId}/verify`)
      .set('Authorization', `Bearer ${adminToken}`)
      .send({ isVerified: true });

    expect(res.status).toBe(200);
    expect(res.body.data.recruiter.isVerified).toBe(true);
  });

  it('should forbid non-admin from verifying recruiter', async () => {
    const res = await request(app)
      .patch(`/api/v1/recruiters/${recruiterId}/verify`)
      .set('Authorization', `Bearer ${recruiterToken}`)
      .send({ isVerified: true });

    expect(res.status).toBe(403);
  });
});
