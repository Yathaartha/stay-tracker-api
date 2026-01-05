import { DataTypes } from "sequelize";

export const up = async ({ context: queryInterface }) => {
  await queryInterface.addColumn("Notifications", "type", {
    type: DataTypes.ENUM("info", "warning", "alert"),
    allowNull: false,
    defaultValue: "info",
  });
};

export const down = async (queryInterface, Sequelize) => {
  await queryInterface.removeColumn("Notifications", "type");
};

