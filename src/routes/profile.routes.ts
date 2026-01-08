import { Router } from "express";
import { updateMyProfile } from "../controllers/profile.controller.js";
import { upload } from "../middlewares/upload.middleware.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = Router();

router.put("/me", authenticate, upload.single("photo"), updateMyProfile);

export default router;

