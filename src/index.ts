import express from "express";
import dotenv from "dotenv";
import type { NextFunction, Request, Response } from "express";
import { migrator } from "./db/migrator.js";
import authRoutes from "./routes/user.routes.js";
import profileRoutes from "./routes/profile.routes.js";
import sequelize from "./db/index.js";
import { fileURLToPath } from "node:url";
import path from "path";

dotenv.config();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

//  global middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// upload middleware
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// routes
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);

// health check
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ status: "OK", uptime: process.uptime() });
});

// global error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);

  const status = err.status || 500;
  const message = err.message || "Something went wrong on our end";

  res.status(status).json({
    status: "error",
    message,
    // only in development mode
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
});

const startServer = async () => {
  try {
    console.log("Connecting to database...");
    await sequelize.authenticate();
    console.log("Database connected successfully.");

    console.log("Applying database migrations...");
    await migrator.up();
    console.log("Database migrations applied successfully.");

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}
        Environment: ${process.env.NODE_ENV || "development"}`);
    });
  } catch (error) {
    console.error("Failed to start the server");
    // console.error(error);
    console.dir(error, { depth: null }); // This will force it to show the full error details
    process.exit(1);
  }
};

startServer();

