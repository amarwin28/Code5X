import { test, describe, before, after } from "node:test";
import assert from "node:assert/strict";
import http from "node:http";
import app from "../src/app.js";
import { connectDatabase, disconnectDatabase, prisma } from "../src/config/database.js";
import { hashPassword } from "../src/utils/password.js";

let server;
let baseUrl;

before(async () => {
  await connectDatabase();

  // Ensure test users exist
  const password = await hashPassword("Eleva@123");
  const users = [
    { email: "admin@eleva.com", role: "ADMIN" },
    { email: "institution@eleva.com", role: "INSTITUTION" },
    { email: "student@eleva.com", role: "STUDENT" },
    { email: "recruiter@eleva.com", role: "RECRUITER" },
  ];

  for (const u of users) {
    await prisma.user.upsert({
      where: { email: u.email },
      update: { password, role: u.role },
      create: { email: u.email, password, role: u.role }
    });
  }

  // Start temporary server for testing
  await new Promise((resolve) => {
    server = http.createServer(app);
    server.listen(0, () => {
      const port = server.address().port;
      baseUrl = `http://127.0.0.1:${port}`;
      resolve();
    });
  });
});

after(async () => {
  if (server) {
    await new Promise((resolve) => server.close(resolve));
  }
  await disconnectDatabase();
});

describe("Health Check Endpoints", () => {
  test("GET /health returns HTTP 200 with expected JSON payload", async () => {
    const res = await fetch(`${baseUrl}/health`);
    assert.equal(res.status, 200);

    const body = await res.json();
    assert.equal(body.success, true);
    assert.equal(body.message, "Eleva backend is running");
    assert.equal(body.environment, "development");
  });

  test("GET /api/health returns HTTP 200 with expected JSON payload", async () => {
    const res = await fetch(`${baseUrl}/api/health`);
    assert.equal(res.status, 200);

    const body = await res.json();
    assert.equal(body.success, true);
    assert.equal(body.message, "Eleva backend is running");
  });
});

describe("Authentication & Role Authorization", () => {
  let studentToken = "";
  let adminToken = "";

  test("POST /api/auth/login succeeds for student@eleva.com", async () => {
    const res = await fetch(`${baseUrl}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "student@eleva.com",
        password: "Eleva@123"
      })
    });

    assert.equal(res.status, 200);
    const body = await res.json();
    assert.equal(body.success, true);
    assert.ok(body.data.token, "Token must be present");
    assert.equal(body.data.user.email, "student@eleva.com");
    assert.equal(body.data.user.role, "STUDENT");
    assert.ok(body.data.user.id, "User ID must be present");

    studentToken = body.data.token;
  });

  test("POST /api/auth/login succeeds for all standard roles (ADMIN, INSTITUTION, RECRUITER)", async () => {
    for (const [email, role] of [
      ["admin@eleva.com", "ADMIN"],
      ["institution@eleva.com", "INSTITUTION"],
      ["recruiter@eleva.com", "RECRUITER"]
    ]) {
      const res = await fetch(`${baseUrl}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password: "Eleva@123" })
      });

      assert.equal(res.status, 200);
      const body = await res.json();
      assert.equal(body.success, true);
      assert.equal(body.data.user.role, role);

      if (role === "ADMIN") {
        adminToken = body.data.token;
      }
    }
  });

  test("POST /api/auth/login returns 401 for invalid password", async () => {
    const res = await fetch(`${baseUrl}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "student@eleva.com",
        password: "WrongPassword123"
      })
    });

    assert.equal(res.status, 401);
    const body = await res.json();
    assert.equal(body.success, false);
  });

  test("POST /api/auth/login returns 401 for non-existent email", async () => {
    const res = await fetch(`${baseUrl}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "nonexistent@eleva.com",
        password: "Eleva@123"
      })
    });

    assert.equal(res.status, 401);
    const body = await res.json();
    assert.equal(body.success, false);
  });

  test("POST /api/auth/login returns 400 for missing fields", async () => {
    const res = await fetch(`${baseUrl}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "student@eleva.com" })
    });

    assert.equal(res.status, 400);
    const body = await res.json();
    assert.equal(body.success, false);
  });

  test("GET /api/auth/me returns 401 without authorization header", async () => {
    const res = await fetch(`${baseUrl}/api/auth/me`);
    assert.equal(res.status, 401);
  });

  test("GET /api/auth/me returns 200 and user data with valid JWT", async () => {
    const res = await fetch(`${baseUrl}/api/auth/me`, {
      headers: { Authorization: `Bearer ${studentToken}` }
    });

    assert.equal(res.status, 200);
    const body = await res.json();
    assert.equal(body.success, true);
    assert.equal(body.data.email, "student@eleva.com");
    assert.equal(body.data.role, "STUDENT");
  });
});

describe("Core API Modules", () => {
  let authToken = "";

  before(async () => {
    const res = await fetch(`${baseUrl}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "admin@eleva.com",
        password: "Eleva@123"
      })
    });
    const body = await res.json();
    authToken = body.data.token;
  });

  test("GET /api/institutions returns 200 and list", async () => {
    const res = await fetch(`${baseUrl}/api/institutions`);
    assert.equal(res.status, 200);
    const body = await res.json();
    assert.equal(body.success, true);
    assert.ok(Array.isArray(body.data));
  });

  test("GET /api/students returns 200 with auth", async () => {
    const res = await fetch(`${baseUrl}/api/students`, {
      headers: { Authorization: `Bearer ${authToken}` }
    });
    assert.equal(res.status, 200);
    const body = await res.json();
    assert.equal(body.success, true);
    assert.ok(Array.isArray(body.data));
  });

  test("GET /api/recruiters returns 200 and list", async () => {
    const res = await fetch(`${baseUrl}/api/recruiters`);
    assert.equal(res.status, 200);
    const body = await res.json();
    assert.equal(body.success, true);
    assert.ok(Array.isArray(body.data));
  });

  test("GET /api/opportunities returns 200 and list", async () => {
    const res = await fetch(`${baseUrl}/api/opportunities`);
    assert.equal(res.status, 200);
    const body = await res.json();
    assert.equal(body.success, true);
    assert.ok(Array.isArray(body.data));
  });

  test("GET /api/applications returns 200 with auth", async () => {
    const res = await fetch(`${baseUrl}/api/applications`, {
      headers: { Authorization: `Bearer ${authToken}` }
    });
    assert.equal(res.status, 200);
    const body = await res.json();
    assert.equal(body.success, true);
    assert.ok(Array.isArray(body.data));
  });

  test("GET /api/placements returns 200 and list", async () => {
    const res = await fetch(`${baseUrl}/api/placements`);
    assert.equal(res.status, 200);
    const body = await res.json();
    assert.equal(body.success, true);
    assert.ok(Array.isArray(body.data));
  });

  test("GET non-existent route returns 404", async () => {
    const res = await fetch(`${baseUrl}/api/non-existent-route`);
    assert.equal(res.status, 404);
    const body = await res.json();
    assert.equal(body.success, false);
  });
});
