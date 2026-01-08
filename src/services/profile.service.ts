import UserProfile from "../models/UserProfile.js";
import type { EditUserProfileData } from "../utils/types/types.js";

export class ProfileService {
  static async createOrUpdateProfile(
    userId: string,
    profileData: EditUserProfileData,
    filePath?: string
  ) {
    const data = {
      ...profileData,
      userId,
      ...(filePath && { photoUrl: `/uploads/profiles/${filePath}` }),
    };

    const [profile, created] = await UserProfile.upsert(data, {
      returning: true,
    });

    return profile;
  }

  static async getProfileByUserId(userId: string) {
    const profile: UserProfile | null = await UserProfile.findOne({
      where: { userId },
    });

    if (!profile) throw new Error("Profile not found");
    return profile;
  }
}

