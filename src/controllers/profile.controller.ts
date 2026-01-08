import type { Request, Response } from "express";
import { ProfileService } from "../services/profile.service.js";
import type UserProfile from "../models/UserProfile.js";

export const updateMyProfile = async (req: Request, res: Response) => {
  try {
    const userId: string = req.user!.userId;
    const profile: UserProfile = await ProfileService.createOrUpdateProfile(
      userId,
      req.body,
      req.file?.filename
    );

    res.status(200).json(profile);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

