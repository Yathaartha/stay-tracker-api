import { DataTypes, Model } from "sequelize";
import sequelize from "../index.js";
import User from "./User.js";
import Booking from "./Booking.js";
import Availability from "./Availability.js";

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

Listing.belongsTo(User, {
  foreignKey: "hostId",
  as: "host",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

Listing.hasMany(Booking, {
  foreignKey: "listingId",
  as: "bookings",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Listing.hasMany(Availability, {
  foreignKey: "listingId",
  as: "availabilities",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

export default Listing;

