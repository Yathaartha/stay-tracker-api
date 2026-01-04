import express from "express";
import dotenv from "dotenv";
import type { Request, Response } from "express";
import { migrator } from "./db/migrator.js";

dotenv.config();

const startServer = async () => {
  try {
    await migrator.up();
    console.log("Database migrations applied successfully.");

    const app = express();
    const port = process.env.PORT || 3000;

    app.use(express.json());

    app.get("/", (req: Request, res: Response) => {
      res.send("Stay Tracker API is running!");
    });

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Error applying database migrations:", error);
    process.exit(1);
  }
};

startServer();

