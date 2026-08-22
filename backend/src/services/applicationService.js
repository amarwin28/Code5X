import { prisma } from "../config/database.js";

export const listApplications = () =>
  prisma.application.findMany({
    include: { student: true, opportunity: true },
    orderBy: { createdAt: "desc" }
  });

export const getApplication = (id) =>
  prisma.application.findUnique({
    where: { id: Number(id) },
    include: { student: true, opportunity: true }
  });

export const createApplication = (data) =>
  prisma.application.create({
    data: {
      studentId: Number(data.studentId),
      opportunityId: Number(data.opportunityId)
    }
  });

export const updateStatus = (id, status) =>
  prisma.application.update({
    where: { id: Number(id) },
    data: { status }
  });