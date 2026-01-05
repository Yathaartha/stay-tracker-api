import { Umzug, SequelizeStorage } from "umzug";
import sequelize from "./index.js";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

// Helper for ESM __dirname
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const migrator = new Umzug({
  migrations: {
    glob: ["migrations/*.js", { cwd: __dirname }],
  },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: console,
});

