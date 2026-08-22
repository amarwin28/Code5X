import { prisma } from "../config/database.js";
import { comparePassword } from "../utils/password.js";
import { signToken } from "../utils/jwt.js";

export async function login(email, password) {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || !(await comparePassword(password, user.password))) {
    const err = new Error("Invalid email or password");
    err.status = 401;
    throw err;
  }

  const token = signToken({ userId: user.id, role: user.role, email: user.email });

  return {
    token,
    user: {
      id: user.id,
      email: user.email,
      role: user.role
    }
  };
}

export async function getCurrentUser(userId) {
  return prisma.user.findUnique({
    where: { id: Number(userId) },
    select: {
      id: true,
      email: true,
      role: true,
      createdAt: true,
      institution: true,
      student: true,
      recruiter: true
    }
  });
}