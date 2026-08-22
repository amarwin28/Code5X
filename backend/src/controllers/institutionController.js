import * as service from "../services/institutionService.js";
import { success } from "../utils/response.js";

export async function list(req, res, next) {
  try { return success(res, await service.listInstitutions()); } catch (e) { next(e); }
}

export async function get(req, res, next) {
  try {
    const item = await service.getInstitution(req.params.id);
    if (!item) return res.status(404).json({ success: false, message: "Institution not found" });
    return success(res, item);
  } catch (e) { next(e); }
}

export async function create(req, res, next) {
  try { return success(res, await service.createInstitution(req.body), "Institution created", 201); } catch (e) { next(e); }
}

export async function update(req, res, next) {
  try { return success(res, await service.updateInstitution(req.params.id, req.body), "Institution updated"); } catch (e) { next(e); }
}