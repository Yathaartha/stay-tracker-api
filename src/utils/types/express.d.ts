import type { Request } from "express";
import type { ROLES } from "./types.ts";

declare global {
  namespace Express {
    interface Request {
      user?: {
        userId: string;
        role: ROLES[keyof ROLES];
      };
    }
  }
}

