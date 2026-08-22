import { Router } from "express";
import * as controller from "../controllers/institutionController.js";
import { authenticate } from "../middleware/authMiddleware.js";

const router = Router();

router.get("/", controller.list);
router.get("/:id", controller.get);
router.post("/", authenticate, controller.create);
router.put("/:id", authenticate, controller.update);

export default router;