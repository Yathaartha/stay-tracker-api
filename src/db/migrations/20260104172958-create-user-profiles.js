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
    first_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    last_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    middle_name: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    date_of_birth: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    phone_number: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    photo_url: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    street_address: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    city: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    state: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    zip_code: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    country: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  });
};

export const down = async ({ context: queryInterface }) => {
  await queryInterface.dropTable("UserProfiles");
};

