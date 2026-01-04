import Sequelize, { DataTypes } from "sequelize";

export const up = async ({ context: queryInterface }) => {
  await queryInterface.createTable("Listings", {
    id: {
      allowNull: false,
      defaultValue: DataTypes.UUID,
      primaryKey: true,
      type: Sequelize.UUID,
    },
    host_id: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    address_line1: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    address_line2: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    state: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    zip_code: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    country: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    longitude: {
      type: Sequelize.DECIMAL(10, 7),
      allowNull: false,
    },
    latitude: {
      type: Sequelize.DECIMAL(10, 7),
      allowNull: false,
    },
    capacity: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    num_bedrooms: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    num_bathrooms: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    price_per_night: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
    photo_urls: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: true,
    },
    video_urls: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: true,
    },
  });
};

export const down = async (queryInterface, Sequelize) => {
  await queryInterface.dropTable("Listings");
};

