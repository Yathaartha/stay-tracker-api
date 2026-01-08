import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import type { ROLES } from "../utils/types/types.js";
import { userRepository } from "../db/repositories/user.repository.js";

const JWT_SECRET = process.env.JWT_SECRET;

export class AuthService {
  static async register(
    username: string,
    password: string,
    role: ROLES[keyof ROLES]
  ) {
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      throw new Error("Username already taken");
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await User.create({
      username,
      password: hashedPassword,
      role,
    });

    return { id: newUser.id, username: newUser.username };
  }

  static async login(username: string, password: string) {
    const user = await userRepository.findByUsername(username);

    if (!user) {
      throw new Error("User does not exist");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid credentials");
    }

    const token = jwt.sign(
      { userId: user.id, username: user.username, role: user.role },
      JWT_SECRET as string,
      { expiresIn: "24h" }
    );

    return {
      token,
      user: { id: user.id, username: user.username, role: user.role },
    };
  }
}

