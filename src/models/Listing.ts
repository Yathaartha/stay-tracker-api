import { DataTypes, Model } from "sequelize";
import sequelize from "../db/index.js";

class Listing extends Model {
  id!: string;
  hostId!: string;
  title!: string;
  description!: string;
  addressLine1!: string;
  addressLine2?: string | null;
  city!: string;
  state!: string;
  zipCode!: string;
  country!: string;
  longitude!: number;
  latitude!: number;
  capacity!: number;
  numBedrooms!: number;
  numBathrooms!: number;
  pricePerNight!: number;
  photoUrls!: string[];
  videoUrls!: string[];
}

Listing.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    hostId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: "host_id",
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    addressLine1: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "address_line_1",
    },
    addressLine2: {
      type: DataTypes.STRING,
      allowNull: true,
      field: "address_line_2",
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zipCode: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "zip_code",
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.DECIMAL(10, 7),
      allowNull: false,
    },
    latitude: {
      type: DataTypes.DECIMAL(10, 7),
      allowNull: false,
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    numBedrooms: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "num_bedrooms",
    },
    numBathrooms: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "num_bathrooms",
    },
    pricePerNight: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      field: "price_per_night",
    },
    photoUrls: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
      defaultValue: [],
      field: "photo_urls",
    },
    videoUrls: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
      defaultValue: [],
      field: "video_urls",
    },
  },
  {
    sequelize,
    modelName: "Listing",
    tableName: "Listings",
    timestamps: true,
  }
);

export default Listing;

