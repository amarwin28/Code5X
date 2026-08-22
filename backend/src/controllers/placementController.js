import * as service from "../services/placementService.js";
import { success } from "../utils/response.js";

export async function list(req, res, next) {
  try {
    return success(res, await service.listPlacements());
  } catch (e) {
    next(e);
  }
}

export async function get(req, res, next) {
  try {
    const item = await service.getPlacement(req.params.id);
    if (!item) {
      return res.status(404).json({ success: false, message: "Placement not found" });
    }
    return success(res, item);
  } catch (e) {
    next(e);
  }
}

export async function create(req, res, next) {
  try {
    return success(res, await service.createPlacement(req.body), "Placement created", 201);
  } catch (e) {
    next(e);
  }
}

export async function update(req, res, next) {
  try {
    return success(res, await service.updatePlacement(req.params.id, req.body), "Placement updated");
  } catch (e) {
    next(e);
  }
}