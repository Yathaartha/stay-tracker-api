require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST || "localhost", // 'db' when running in docker
    dialect: "postgres",
    port: 5432,
  },
};

