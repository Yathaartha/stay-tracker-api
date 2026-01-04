import Sequelize, { DataTypes } from "sequelize";

export const up = async ({ context: queryInterface }) => {
  await queryInterface.createTable("Users", {
    id: {
      allowNull: false,
      defaultValue: DataTypes.UUID,
      primaryKey: true,
      type: Sequelize.UUID,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    role: {
      type: Sequelize.ENUM("admin", "user", "guest"),
      allowNull: false,
      defaultValue: "user",
    },
  });
};

export const down = async ({ context: queryInterface }) => {
  await queryInterface.dropTable("Users");
};

