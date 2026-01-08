import { z, type ZodObject } from "zod";

export const registerUserSchema: ZodObject<any> = z.object({
  body: z.object({
    username: z
      .string()
      .min(3, "Username must be at least 3 characters long")
      .max(20, "Username must be at most 20 characters long")
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers, and underscores"
      ),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
    role: z
      .enum(["user", "host", "admin"])
      .refine((val) => val !== undefined, "Role is required"),
  }),
});

export const loginUserSchema: ZodObject<any> = z.object({
  body: z.object({
    username: z.string().min(3, "Username is required"),
    password: z.string().min(1, "Password is required"),
  }),
});

export type RegisterUserInput = z.infer<typeof registerUserSchema>["body"];
export type LoginUserInput = z.infer<typeof loginUserSchema>["body"];

