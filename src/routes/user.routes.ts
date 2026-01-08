import { Router } from "express";
import { authenticate, authorize } from "../middlewares/auth.middleware.js";
import { getProfile, login, register } from "../controllers/auth.controller.js";
import {
  loginUserSchema,
  registerUserSchema,
} from "../validations/auth.schema.js";
import { validate } from "../middlewares/validate.middleware.js";

const router = Router();

router.post("/register", validate(registerUserSchema), register);
router.post("/login", validate(loginUserSchema), login);

router.get("/profile", authenticate, getProfile);

// This route is admin-only
router.get("/admin-dashboard", authenticate, authorize("admin"), (req, res) => {
  res.send("Welcome, Admin!");
});

export default router;

