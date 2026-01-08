import { Router } from "express";
import { updateMyProfile } from "../controllers/profile.controller.js";
import { upload } from "../middlewares/upload.middleware.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validate.middleware.js";
import { updateProfileSchema } from "../validations/profile.schema.js";

const router = Router();

router.put(
  "/me",
  authenticate,
  upload.single("photo"),
  validate(updateProfileSchema),
  updateMyProfile
);

export default router;

