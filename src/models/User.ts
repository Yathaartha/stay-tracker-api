import sequelize from "../db/index.js";
import { DataTypes, Model } from "sequelize";
import UserProfile from "./UserProfile.js";
import Listing from "./Listing.js";
import Booking from "./Booking.js";
import Notification from "./Notification.js";
import Review from "./Review.js";

class User extends Model {
  public id!: string;
  public username!: string;
  public password!: string;
  public role!: "admin" | "user" | "host";
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("admin", "user", "host"),
      allowNull: false,
      defaultValue: "user",
    },
  },
  {
    sequelize, // this should be your Sequelize instance
    modelName: "User",
    tableName: "Users",
    timestamps: true,
  }
);

User.hasOne(UserProfile, {
  foreignKey: "userId",
  as: "profile",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

User.hasMany(Listing, {
  foreignKey: "hostId",
  as: "listings",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

User.hasMany(Booking, {
  foreignKey: "userId",
  as: "bookings",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

User.hasMany(Notification, {
  foreignKey: "userId",
  as: "notifications",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

User.hasMany(Review, {
  foreignKey: "userId",
  as: "reviews",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

export default User;

