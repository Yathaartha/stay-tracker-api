import { z, ZodObject } from "zod";

export const updateProfileSchema: ZodObject<any> = z.object({
  body: z.object({
    firstName: z
      .string()
      .min(2, "First name must be at least 2 characters long"),
    lastName: z.string().min(2, "Last name must be at least 2 characters long"),
    middleName: z.string().optional(),
    email: z.email("Invalid email address"),
    phoneNmber: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number"),
    dateOfBirth: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: "Invalid date format",
    }),
    streetAddress: z.string().optional(),
    state: z.string().optional(),
    city: z.string().optional(),
    zipCode: z.string().optional(),
    country: z.string().optional(),
  }),
});

export type UpdateProfileInput = z.infer<typeof updateProfileSchema>["body"];

