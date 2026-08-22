import { prisma } from "../config/database.js";

export const listInstitutions = () =>
  prisma.institution.findMany({ orderBy: { createdAt: "desc" } });

export const getInstitution = (id) =>
  prisma.institution.findUnique({
    where: { id: Number(id) },
    include: { students: true }
  });

export const createInstitution = (data) => {
  const payload = { ...data };
  if (payload.userId !== undefined && payload.userId !== null && payload.userId !== "") {
    payload.userId = Number(payload.userId);
  } else {
    delete payload.userId;
  }
  return prisma.institution.create({ data: payload });
};

export const updateInstitution = (id, data) => {
  const payload = { ...data };
  if (payload.userId !== undefined && payload.userId !== null && payload.userId !== "") {
    payload.userId = Number(payload.userId);
  }
  return prisma.institution.update({ where: { id: Number(id) }, data: payload });
};