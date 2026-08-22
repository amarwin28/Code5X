import * as service from "../services/studentService.js";
import { success } from "../utils/response.js";

export async function list(req, res, next) {
  try { return success(res, await service.listStudents()); } catch (e) { next(e); }
}

export async function get(req, res, next) {
  try {
    const item = await service.getStudent(req.params.id);
    if (!item) return res.status(404).json({ success: false, message: "Student not found" });
    return success(res, item);
  } catch (e) { next(e); }
}

export async function create(req, res, next) {
  try { return success(res, await service.createStudent(req.body), "Student created", 201); } catch (e) { next(e); }
}

export async function update(req, res, next) {
  try { return success(res, await service.updateStudent(req.params.id, req.body), "Student updated"); } catch (e) { next(e); }
}