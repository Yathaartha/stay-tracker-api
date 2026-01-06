import { Router } from "express";
import { authenticate, authorize } from "../middlewares/auth.middleware.js";
import { getProfile } from "../controllers/auth.controller.js";

const router = Router();

router.get("/profile", authenticate, getProfile);

// This route is admin-only
router.get("/admin-dashboard", authenticate, authorize("admin"), (req, res) => {
  res.send("Welcome, Admin!");
});

export default router;

