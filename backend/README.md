# Placement & Campus Recruitment Platform - Backend API

Production-ready Express.js REST API with Prisma ORM, JWT authentication, Role-Based Access Control (RBAC), Joi input validation, layered Service-Controller architecture, and comprehensive Jest test suite.

---

## 📁 Project Architecture

```
backend/
├── src/
│   ├── config/
│   │   ├── database.js               # Prisma Client instance & lifecycle
│   │   └── env.js                    # Environment configuration & validation
│   │
│   ├── controllers/                  # Request & Response handling
│   │   ├── authController.js
│   │   ├── studentController.js
│   │   ├── institutionController.js
│   │   ├── recruiterController.js
│   │   ├── opportunityController.js
│   │   ├── applicationController.js
│   │   └── placementController.js
│   │
│   ├── routes/                       # Express router endpoint definitions
│   │   ├── authRoutes.js
│   │   ├── studentRoutes.js
│   │   ├── institutionRoutes.js
│   │   ├── recruiterRoutes.js
│   │   ├── opportunityRoutes.js
│   │   ├── applicationRoutes.js
│   │   └── placementRoutes.js
│   │
│   ├── services/                     # Business logic layer
│   │   ├── authService.js
│   │   ├── studentService.js
│   │   ├── institutionService.js
│   │   ├── recruiterService.js
│   │   ├── opportunityService.js
│   │   ├── applicationService.js
│   │   └── placementService.js
│   │
│   ├── middleware/                   # Express middlewares
│   │   ├── authMiddleware.js         # Bearer JWT verification
│   │   ├── roleMiddleware.js         # RBAC guard (authorize)
│   │   ├── errorMiddleware.js        # Global error & 404 handler
│   │   └── validationMiddleware.js   # Joi payload validator
│   │
│   ├── validators/                   # Joi validation schemas
│   │   ├── authValidator.js
│   │   ├── studentValidator.js
│   │   ├── institutionValidator.js
│   │   ├── recruiterValidator.js
│   │   ├── opportunityValidator.js
│   │   └── applicationValidator.js
│   │
│   ├── utils/                        # Shared utility modules
│   │   ├── jwt.js                    # JWT sign & verify
│   │   ├── password.js               # Bcrypt password hashing
│   │   ├── response.js               # Standard API response & AppError
│   │   └── logger.js                 # Structured logger
│   │
│   ├── app.js                        # Express app configuration & middlewares
│   └── server.js                     # Server entrypoint & DB connection
│
├── prisma/
│   └── schema.prisma                 # Database schema models & relations
│
├── tests/                            # Jest & Supertest automated test suites
│   ├── auth.test.js
│   ├── student.test.js
│   ├── institution.test.js
│   ├── recruiter.test.js
│   └── opportunity.test.js
│
├── package.json
└── .env
```

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Create `.env` file (or use defaults):
```env
PORT=5000
NODE_ENV=development
DATABASE_URL="file:./dev.db"
JWT_SECRET="your-256-bit-secret"
JWT_EXPIRES_IN="7d"
CORS_ORIGIN="*"
```

### 3. Generate Database
```bash
# Push schema to SQLite database (or migrations for PostgreSQL)
npm run prisma:push
```

### 4. Run Development Server
```bash
npm run dev
# Server will start on http://localhost:5000
```

### 5. Run Automated Test Suite
```bash
npm test
```

---

## 🔑 User Roles & Permissions

| Role | Permissions & Access |
|---|---|
| `STUDENT` | Create/update personal profile, browse job/internship postings, apply for eligible jobs, track application status. |
| `RECRUITER` | Create/update company profile, post & manage opportunities, view applicants, update candidate application stages, record confirmed placements. |
| `INSTITUTION` | Manage college profile, view student roster, inspect placement statistics, track campus recruitment analytics. |
| `ADMIN` | Complete access to verify recruiters, manage all users, postings, applications, and placement reports. |

---

## 📡 API Endpoints Overview

### Authentication (`/api/v1/auth`)
- `POST /register` - Register a new user (with role & initial profile)
- `POST /login` - User login & JWT issuance
- `GET /me` - Get current authenticated user profile
- `POST /change-password` - Update current user password

### Students (`/api/v1/students`)
- `POST /` - Create student profile (Student, Admin)
- `GET /me` - View own student profile (Student)
- `PUT /me` - Update own student profile (Student)
- `GET /` - List/filter students with pagination (Institution, Recruiter, Admin)
- `GET /:id` - Get student details by ID

### Institutions (`/api/v1/institutions`)
- `POST /` - Create institution profile (Institution, Admin)
- `GET /me` - View own institution profile (Institution)
- `PUT /me` - Update own institution profile (Institution)
- `GET /:id/analytics` - View placement statistics & rate (Institution, Admin)
- `GET /` - List all institutions

### Recruiters (`/api/v1/recruiters`)
- `POST /` - Create recruiter profile (Recruiter, Admin)
- `GET /me` - View own recruiter profile (Recruiter)
- `PUT /me` - Update own recruiter profile (Recruiter)
- `PATCH /:id/verify` - Verify recruiter company (Admin)
- `GET /` - List all recruiters

### Opportunities (`/api/v1/opportunities`)
- `POST /` - Post job/internship opportunity (Recruiter, Admin)
- `GET /` - Search and filter opportunities (All authenticated users)
- `GET /:id` - View opportunity details
- `PUT /:id` - Update opportunity (Recruiter, Admin)
- `PATCH /:id/status` - Change status (`OPEN`, `CLOSED`, `ARCHIVED`)

### Applications (`/api/v1/applications`)
- `POST /` - Apply to an opportunity with CGPA & department eligibility checks (Student)
- `GET /my` - View my submitted applications (Student)
- `GET /opportunity/:opportunityId` - View applicants for a job posting (Recruiter, Admin)
- `PATCH /:id/status` - Update candidate status (`APPLIED`, `SHORTLISTED`, `INTERVIEW_SCHEDULED`, `REJECTED`, `ACCEPTED`) (Recruiter, Admin)
- `GET /` - List all applications (Institution, Admin)

### Placements (`/api/v1/placements`)
- `POST /` - Record confirmed placement & compensation package (Recruiter, Admin, Institution)
- `GET /analytics/overall` - Get platform-wide placement metrics & highest/average package
- `GET /` - Query and filter placement records
- `GET /:id` - View placement record details
