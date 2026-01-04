import Sequelize, { DataTypes } from "sequelize";

export const up = async ({ context: queryInterface }) => {
  await queryInterface.createTable("Bookings", {
    id: {
      allowNull: false,
      defaultValue: DataTypes.UUID,
      primaryKey: true,
      type: Sequelize.UUID,
    },
    listing_id: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: "Listings",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    user_id: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    start_date: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    end_date: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    total_price: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
    status: {
      type: Sequelize.ENUM("pending", "confirmed", "cancelled", "completed"),
      allowNull: false,
      defaultValue: "pending",
    },
  });
};

export const down = async (queryInterface, Sequelize) => {
  await queryInterface.dropTable("Bookings");
};

