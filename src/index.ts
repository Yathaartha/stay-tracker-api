import express from "express";
import dotenv from "dotenv";
import type { NextFunction, Request, Response } from "express";
import { migrator } from "./db/migrator.js";
import authRoutes from "./routes/user.routes.js";
import profileRoutes from "./routes/profile.routes.js";

dotenv.config();

const startServer = async () => {
  try {
    await migrator.up();
    console.log("Database migrations applied successfully.");

    const app = express();
    const port = process.env.PORT || 3000;

    app.use(express.json());

    app.use("/uploads", express.static("uploads"));

    app.get("/", (req: Request, res: Response) => {
      res.send("Stay Tracker API is running!");
    });

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });

    app.use("/api/auth", authRoutes);
    app.use("/api/profile", profileRoutes);

    app.use((err: any, req: Request, res: Response, next: NextFunction) => {
      console.error(err.stack);

      const status = err.status || 500;
      const message = err.message || "Something went wrong on our end";

      res.status(status).json({
        status: "error",
        message,
      });
    });
  } catch (error) {
    console.error("Error applying database migrations:", error);
    process.exit(1);
  }
};

startServer();

