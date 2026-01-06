import type { NextFunction, Request, Response } from "express";
import type { ROLES } from "../utils/types/types.js";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

interface JwtPayload {
  userId: string;
  role: ROLES[keyof ROLES];
}

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader: string | undefined = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(
      token as string,
      JWT_SECRET as string
    ) as unknown as JwtPayload;

    req.user = {
      userId: decoded.userId,
      role: decoded.role,
    };

    next();
  } catch (error) {
    return res.status(403).json({ error: "Invalid or expired token." });
  }
};

export const authorize = (...allowedRoles: ROLES[keyof ROLES][]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res
        .status(403)
        .json({ error: "Forbidden. You don't have access to this resource." });
    }
  };
};

