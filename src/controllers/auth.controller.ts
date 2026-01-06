import type { Request, Response } from "express";
import { AuthService } from "../services/auth.service.js";

export const register = async (req: Request, res: Response) => {
  try {
    const { username, password, role } = req.body;
    const user = await AuthService.register(username, password, role);

    res.status(201).json({ message: "User registered successfully", user });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const data = await AuthService.login(username, password);

    res.status(200).json({ message: "Login successful", ...data });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getProfile = async (req: Request, res: Response) => {
  const userId = req.user?.userId;

  res.json({ message: `Your user ID is ${userId}` });
};

