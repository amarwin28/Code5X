const request = require('supertest');
const app = require('../src/app');
const { prisma } = require('../src/config/database');

describe('Institution Endpoints', () => {
  let institutionToken;
  let institutionId;

  beforeAll(async () => {
    await prisma.placement.deleteMany({});
    await prisma.application.deleteMany({});
    await prisma.student.deleteMany({});
    await prisma.institution.deleteMany({});
    await prisma.user.deleteMany({});

    const instUser = await request(app)
      .post('/api/v1/auth/register')
      .send({
        email: 'admin@university.edu',
        password: 'Password123!',
        role: 'INSTITUTION',
        profile: {
          name: 'National Engineering University',
          code: 'NEU',
          contactEmail: 'placement@neu.edu',
        },
      });

    institutionToken = instUser.body.data.token;
    institutionId = instUser.body.data.user.institution.id;
  });

  afterAll(async () => {
    await prisma.placement.deleteMany({});
    await prisma.application.deleteMany({});
    await prisma.student.deleteMany({});
    await prisma.institution.deleteMany({});
    await prisma.user.deleteMany({});
    await prisma.$disconnect();
  });

  it('should fetch own institution profile via /institutions/me', async () => {
    const res = await request(app)
      .get('/api/v1/institutions/me')
      .set('Authorization', `Bearer ${institutionToken}`);

    expect(res.status).toBe(200);
    expect(res.body.data.institution.code).toBe('NEU');
  });

  it('should update institution profile', async () => {
    const res = await request(app)
      .put('/api/v1/institutions/me')
      .set('Authorization', `Bearer ${institutionToken}`)
      .send({
        coordinatorName: 'Dr. Sarah Connor',
        coordinatorEmail: 'sconnor@neu.edu',
        phone: '+1 555-0199',
      });

    expect(res.status).toBe(200);
    expect(res.body.data.institution.coordinatorName).toBe('Dr. Sarah Connor');
  });

  it('should get institution analytics', async () => {
    const res = await request(app)
      .get(`/api/v1/institutions/${institutionId}/analytics`)
      .set('Authorization', `Bearer ${institutionToken}`);

    expect(res.status).toBe(200);
    expect(res.body.data.analytics).toHaveProperty('totalStudents');
    expect(res.body.data.analytics).toHaveProperty('placementRate');
  });
});
