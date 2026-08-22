# Eleva Backend

Backend API for the Eleva education-to-career platform.

## Stack

- Node.js
- Express.js
- Prisma
- PostgreSQL
- JWT
- bcrypt

## Setup

```bash
npm install
```

Copy `.env.example` to `.env` and configure PostgreSQL:

```env
DATABASE_URL="postgresql://eleva_user:YOUR_PASSWORD@localhost:5432/eleva"
JWT_SECRET="your-secret"
PORT=5000
FRONTEND_URL="http://localhost:5173"
```

Generate Prisma Client:

```bash
npx prisma generate
```

Create the initial database migration:

```bash
npx prisma migrate dev --name init
```

Run the development server:

```bash
npm run dev
```

Health check:

```text
GET http://localhost:5000/api/health
```

## Core API

- `/api/auth`
- `/api/institutions`
- `/api/students`
- `/api/recruiters`
- `/api/opportunities`
- `/api/applications`
- `/api/placements`

## Important

Do not commit `.env` or `node_modules`.
