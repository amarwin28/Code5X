import * as service from "../services/recruiterService.js";
import { success } from "../utils/response.js";

export async function list(req, res, next) {
  try { return success(res, await service.listRecruiters()); } catch (e) { next(e); }
}

export async function get(req, res, next) {
  try {
    const item = await service.getRecruiter(req.params.id);
    if (!item) return res.status(404).json({ success: false, message: "Recruiter not found" });
    return success(res, item);
  } catch (e) { next(e); }
}

export async function create(req, res, next) {
  try { return success(res, await service.createRecruiter(req.body), "Recruiter created", 201); } catch (e) { next(e); }
}

export async function update(req, res, next) {
  try { return success(res, await service.updateRecruiter(req.params.id, req.body), "Recruiter updated"); } catch (e) { next(e); }
}