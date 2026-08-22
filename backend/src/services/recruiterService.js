import { prisma } from "../config/database.js";

export const listRecruiters = () =>
  prisma.recruiter.findMany({ orderBy: { createdAt: "desc" } });

export const getRecruiter = (id) =>
  prisma.recruiter.findUnique({
    where: { id: Number(id) },
    include: { opportunities: true }
  });

export const createRecruiter = (data) => {
  const payload = { ...data };
  if (payload.userId !== undefined && payload.userId !== null && payload.userId !== "") {
    payload.userId = Number(payload.userId);
  } else {
    delete payload.userId;
  }
  return prisma.recruiter.create({ data: payload });
};

export const updateRecruiter = (id, data) => {
  const payload = { ...data };
  if (payload.userId !== undefined && payload.userId !== null && payload.userId !== "") {
    payload.userId = Number(payload.userId);
  }
  return prisma.recruiter.update({ where: { id: Number(id) }, data: payload });
};