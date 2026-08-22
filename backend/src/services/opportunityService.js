import { prisma } from "../config/database.js";

export const listOpportunities = () =>
  prisma.opportunity.findMany({ include: { recruiter: true }, orderBy: { createdAt: "desc" } });

export const getOpportunity = (id) =>
  prisma.opportunity.findUnique({
    where: { id: Number(id) },
    include: { recruiter: true, applications: true }
  });

export const createOpportunity = (data) => {
  const payload = { ...data };
  if (payload.recruiterId !== undefined && payload.recruiterId !== null) {
    payload.recruiterId = Number(payload.recruiterId);
  }
  if (payload.deadline) {
    payload.deadline = new Date(payload.deadline);
  } else {
    delete payload.deadline;
  }
  return prisma.opportunity.create({ data: payload });
};

export const updateOpportunity = (id, data) => {
  const payload = { ...data };
  if (payload.recruiterId !== undefined && payload.recruiterId !== null) {
    payload.recruiterId = Number(payload.recruiterId);
  }
  if (payload.deadline !== undefined) {
    payload.deadline = payload.deadline ? new Date(payload.deadline) : null;
  }
  return prisma.opportunity.update({ where: { id: Number(id) }, data: payload });
};