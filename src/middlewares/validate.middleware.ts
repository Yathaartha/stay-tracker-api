import type { NextFunction, Request, Response } from "express";
import { ZodError, ZodObject } from "zod";

export const validate =
  (schema: ZodObject<any>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // validate the request body, query, and params against the schema
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          status: "error",
          message: "Validation failed",
          errors: error.issues.map((err) => ({
            field: err.path[1],
            message: err.message,
          })),
        });
      }
      return res.status(500).json({
        status: "error",
        message: "Internal server error",
      });
    }
  };

