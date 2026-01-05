import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize: Sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASSWORD!,
  {
    host: process.env.DB_HOST || "localhost",
    dialect: "postgres",
    port: Number(process.env.DB_PORT) || 5432,
    logging: console.log,
    define: {
      timestamps: true,
      underscored: true,
    },
  }
);

export default sequelize;

