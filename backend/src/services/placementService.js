import { prisma } from "../config/database.js";

export const listPlacements = () =>
  prisma.placement.findMany({
    include: { student: true },
    orderBy: { createdAt: "desc" }
  });

export const getPlacement = (id) =>
  prisma.placement.findUnique({
    where: { id: Number(id) },
    include: { student: true }
  });

export const createPlacement = (data) => {
  const payload = { ...data };
  if (payload.studentId !== undefined && payload.studentId !== null) {
    payload.studentId = Number(payload.studentId);
  }
  if (payload.joiningDate) {
    payload.joiningDate = new Date(payload.joiningDate);
  } else {
    delete payload.joiningDate;
  }
  return prisma.placement.create({ data: payload });
};

export const updatePlacement = (id, data) => {
  const payload = { ...data };
  if (payload.studentId !== undefined && payload.studentId !== null) {
    payload.studentId = Number(payload.studentId);
  }
  if (payload.joiningDate !== undefined) {
    payload.joiningDate = payload.joiningDate ? new Date(payload.joiningDate) : null;
  }
  return prisma.placement.update({
    where: { id: Number(id) },
    data: payload
  });
};
