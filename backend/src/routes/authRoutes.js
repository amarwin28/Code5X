import { Router } from "express";
import { loginController, meController } from "../controllers/authController.js";
import { authenticate } from "../middleware/authMiddleware.js";
import { validateBody } from "../middleware/validationMiddleware.js";
import { loginFields } from "../validators/authValidator.js";

const router = Router();

router.post("/login", validateBody(loginFields), loginController);
router.get("/me", authenticate, meController);

export default router;