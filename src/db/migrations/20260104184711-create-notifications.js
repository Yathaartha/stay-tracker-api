import Sequelize, { DataTypes } from "sequelize";

export const up = async ({ context: queryInterface }) => {
  await queryInterface.createTable("UserProfiles", {
    id: {
      allowNull: false,
      defaultValue: DataTypes.UUID,
      primaryKey: true,
      type: Sequelize.UUID,
    },
    userId: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    booking_id: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: "Bookings",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    message: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    is_read: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });
};

export const down = async (queryInterface, Sequelize) => {
  await queryInterface.dropTable("Notifications");
};

