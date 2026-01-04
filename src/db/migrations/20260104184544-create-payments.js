import Sequelize, { DataTypes } from "sequelize";

export const up = async ({ context: queryInterface }) => {
  await queryInterface.createTable("Payments", {
    id: {
      allowNull: false,
      defaultValue: DataTypes.UUID,
      primaryKey: true,
      type: Sequelize.UUID,
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
    status: {
      type: Sequelize.ENUM("pending", "completed", "failed", "refunded"),
      allowNull: false,
      defaultValue: "pending",
    },
    amount: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
    payment_method: {
      type: Sequelize.ENUM("credit_card", "paypal", "bank_transfer"),
      allowNull: false,
    },
  });
};

export const down = async (queryInterface, Sequelize) => {
  await queryInterface.dropTable("Payments");
};

