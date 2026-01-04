import Sequelize, { DataTypes } from "sequelize";

export const up = async ({ context: queryInterface }) => {
  await queryInterface.createTable("Availabilities", {
    id: {
      allowNull: false,
      defaultValue: DataTypes.UUID,
      primaryKey: true,
      type: Sequelize.UUID,
    },
    lisiting_id: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: "Listings",
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
    price_override: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: true,
    },
    is_available: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  });
};

export const down = async (queryInterface, Sequelize) => {
  await queryInterface.dropTable("Availabilities");
};

