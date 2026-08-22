import * as service from "../services/applicationService.js";
import { success } from "../utils/response.js";

export async function list(req, res, next) {
  try { return success(res, await service.listApplications()); } catch (e) { next(e); }
}

export async function get(req, res, next) {
  try {
    const item = await service.getApplication(req.params.id);
    if (!item) return res.status(404).json({ success: false, message: "Application not found" });
    return success(res, item);
  } catch (e) { next(e); }
}

export async function create(req, res, next) {
  try { return success(res, await service.createApplication(req.body), "Application created", 201); } catch (e) { next(e); }
}

export async function updateStatus(req, res, next) {
  try { return success(res, await service.updateStatus(req.params.id, req.body.status), "Application status updated"); } catch (e) { next(e); }
}