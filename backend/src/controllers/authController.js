import { login, getCurrentUser } from "../services/authService.js";
import { success } from "../utils/response.js";

export async function loginController(req, res, next) {
  try {
    const data = await login(req.body.email, req.body.password);
    return success(res, data, "Login successful");
  } catch (err) {
    next(err);
  }
}

export async function meController(req, res, next) {
  try {
    const user = await getCurrentUser(req.user.userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    return success(res, user, "Current user");
  } catch (err) {
    next(err);
  }
}