import { prisma } from "../config/database.js";

export const listStudents = () =>
  prisma.student.findMany({ include: { institution: true }, orderBy: { createdAt: "desc" } });

export const getStudent = (id) =>
  prisma.student.findUnique({
    where: { id: Number(id) },
    include: {
      institution: true,
      applications: {
        include: { opportunity: true }
      },
      placements: true
    }
  });

export const createStudent = (data) => {
  const payload = { ...data };
  if (payload.institutionId !== undefined && payload.institutionId !== null) {
    payload.institutionId = Number(payload.institutionId);
  }
  if (payload.graduationYear !== undefined && payload.graduationYear !== null && payload.graduationYear !== "") {
    payload.graduationYear = Number(payload.graduationYear);
  } else {
    delete payload.graduationYear;
  }
  if (payload.userId !== undefined && payload.userId !== null && payload.userId !== "") {
    payload.userId = Number(payload.userId);
  } else {
    delete payload.userId;
  }
  return prisma.student.create({ data: payload });
};

export const updateStudent = (id, data) => {
  const payload = { ...data };
  if (payload.institutionId !== undefined && payload.institutionId !== null) {
    payload.institutionId = Number(payload.institutionId);
  }
  if (payload.graduationYear !== undefined && payload.graduationYear !== null && payload.graduationYear !== "") {
    payload.graduationYear = Number(payload.graduationYear);
  }
  if (payload.userId !== undefined && payload.userId !== null && payload.userId !== "") {
    payload.userId = Number(payload.userId);
  }
  return prisma.student.update({ where: { id: Number(id) }, data: payload });
};