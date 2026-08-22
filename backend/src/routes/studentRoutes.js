import { Router } from "express";
import * as controller from "../controllers/studentController.js";
import { authenticate } from "../middleware/authMiddleware.js";

const router = Router();

router.get("/", authenticate, controller.list);
router.get("/:id", authenticate, controller.get);
router.post("/", authenticate, controller.create);
router.put("/:id", authenticate, controller.update);

export default router;