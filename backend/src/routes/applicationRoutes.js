import { Router } from "express";
import * as controller from "../controllers/applicationController.js";
import { authenticate } from "../middleware/authMiddleware.js";

const router = Router();

router.get("/", authenticate, controller.list);
router.get("/:id", authenticate, controller.get);
router.post("/", authenticate, controller.create);
router.patch("/:id/status", authenticate, controller.updateStatus);

export default router;