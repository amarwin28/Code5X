const request = require('supertest');
const app = require('../src/app');
const { prisma } = require('../src/config/database');

describe('Opportunity & Application Workflow Endpoints', () => {
  let recruiterToken;
  let recruiterId;
  let studentToken;
  let studentId;
  let opportunityId;
  let applicationId;

  beforeAll(async () => {
    await prisma.placement.deleteMany({});
    await prisma.application.deleteMany({});
    await prisma.opportunity.deleteMany({});
    await prisma.student.deleteMany({});
    await prisma.recruiter.deleteMany({});
    await prisma.user.deleteMany({});

    // 1. Create Recruiter
    const recUser = await request(app)
      .post('/api/v1/auth/register')
      .send({
        email: 'jobs@acme.com',
        password: 'Password123!',
        role: 'RECRUITER',
        profile: {
          companyName: 'Acme Corp',
          recruiterName: 'Wile E.',
        },
      });

    recruiterToken = recUser.body.data.token;
    recruiterId = recUser.body.data.user.recruiter.id;

    // 2. Create Student
    const stuUser = await request(app)
      .post('/api/v1/auth/register')
      .send({
        email: 'applicant@student.edu',
        password: 'Password123!',
        role: 'STUDENT',
        profile: {
          firstName: 'Alice',
          lastName: 'Wonderland',
          department: 'Computer Science',
          cgpa: 8.8,
          graduationYear: 2026,
        },
      });

    studentToken = stuUser.body.data.token;
    studentId = stuUser.body.data.user.student.id;
  });

  afterAll(async () => {
    await prisma.placement.deleteMany({});
    await prisma.application.deleteMany({});
    await prisma.opportunity.deleteMany({});
    await prisma.student.deleteMany({});
    await prisma.recruiter.deleteMany({});
    await prisma.user.deleteMany({});
    await prisma.$disconnect();
  });

  it('should allow recruiter to create an opportunity', async () => {
    const futureDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();

    const res = await request(app)
      .post('/api/v1/opportunities')
      .set('Authorization', `Bearer ${recruiterToken}`)
      .send({
        title: 'Software Development Engineer I',
        description: 'Design and develop high throughput distributed systems',
        company: 'Acme Corp',
        jobType: 'FULL_TIME',
        location: 'Remote',
        salary: '$120,000 / year',
        minCgpa: 7.5,
        eligibleDepartments: 'Computer Science, Information Technology',
        deadline: futureDate,
      });

    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data.opportunity).toHaveProperty('id');
    expect(res.body.data.opportunity.title).toBe('Software Development Engineer I');
    opportunityId = res.body.data.opportunity.id;
  });

  it('should list open opportunities with filters', async () => {
    const res = await request(app)
      .get('/api/v1/opportunities?search=Software')
      .set('Authorization', `Bearer ${studentToken}`);

    expect(res.status).toBe(200);
    expect(res.body.data.opportunities.length).toBeGreaterThanOrEqual(1);
  });

  it('should allow eligible student to apply for the opportunity', async () => {
    const res = await request(app)
      .post('/api/v1/applications')
      .set('Authorization', `Bearer ${studentToken}`)
      .send({
        opportunityId,
        coverLetter: 'I am excited about this role and love backend engineering.',
        resumeUrl: 'https://example.com/alice-resume.pdf',
      });

    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data.application.status).toBe('APPLIED');
    applicationId = res.body.data.application.id;
  });

  it('should prevent student from applying twice for the same opportunity', async () => {
    const res = await request(app)
      .post('/api/v1/applications')
      .set('Authorization', `Bearer ${studentToken}`)
      .send({
        opportunityId,
      });

    expect(res.status).toBe(409);
    expect(res.body.success).toBe(false);
  });

  it('should allow student to view their submitted applications', async () => {
    const res = await request(app)
      .get('/api/v1/applications/my')
      .set('Authorization', `Bearer ${studentToken}`);

    expect(res.status).toBe(200);
    expect(res.body.data.applications.length).toBe(1);
    expect(res.body.data.applications[0].id).toBe(applicationId);
  });

  it('should allow recruiter to review and update application status', async () => {
    const res = await request(app)
      .patch(`/api/v1/applications/${applicationId}/status`)
      .set('Authorization', `Bearer ${recruiterToken}`)
      .send({
        status: 'SHORTLISTED',
        remarks: 'Impressive profile and CGPA. Invited for Technical Round 1.',
      });

    expect(res.status).toBe(200);
    expect(res.body.data.application.status).toBe('SHORTLISTED');
  });

  it('should allow recruiter to record confirmed placement', async () => {
    const res = await request(app)
      .post('/api/v1/placements')
      .set('Authorization', `Bearer ${recruiterToken}`)
      .send({
        studentId,
        opportunityId,
        package: 120000,
        offerLetterUrl: 'https://example.com/offer-letters/alice.pdf',
      });

    expect(res.status).toBe(201);
    expect(res.body.data.placement.package).toBe(120000);
  });

  it('should return overall placement analytics', async () => {
    const res = await request(app)
      .get('/api/v1/placements/analytics/overall')
      .set('Authorization', `Bearer ${recruiterToken}`);

    expect(res.status).toBe(200);
    expect(res.body.data.analytics.totalPlacements).toBeGreaterThanOrEqual(1);
    expect(res.body.data.analytics.highestPackage).toBe(120000);
  });
});
