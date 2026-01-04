import { Umzug, SequelizeStorage } from "umzug";
import { Sequelize } from "sequelize";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

// Helper for ESM __dirname
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Initialize your Sequelize instance here (or import it from your db config)
const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASSWORD!,
  {
    host: process.env.DB_HOST || "localhost",
    dialect: "postgres",
  }
);

export const migrator = new Umzug({
  migrations: {
    glob: ["migrations/*.js", { cwd: __dirname }],
  },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: console,
});

// This allows you to run it from the command line
if (import.meta.url === `file://${process.argv[1]}`) {
  migrator.runAsCLI();
}

