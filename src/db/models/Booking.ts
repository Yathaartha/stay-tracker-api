import { Model, DataTypes } from "sequelize";
import sequelize from "../index.js";
import Listing from "./Listing.js";
import User from "./User.js";
import Notification from "./Notification.js";
import Review from "./Review.js";

class Booking extends Model {
  id!: string;
  listingId!: string;
  userId!: string;
  startDate!: Date;
  endDate!: Date;
  totalPrice!: number;
  status!: "pending" | "confirmed" | "cancelled" | "completed";
}

Booking.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    listingId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: "listing_id",
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: "user_id",
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: "start_date",
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: "end_date",
    },
    totalPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      field: "total_price",
    },
    status: {
      type: DataTypes.ENUM("pending", "confirmed", "cancelled", "completed"),
      allowNull: false,
      defaultValue: "pending",
    },
  },
  {
    sequelize,
    modelName: "Booking",
    tableName: "Bookings",
    timestamps: true,
  }
);

Booking.belongsTo(Listing, {
  foreignKey: "listingId",
  as: "listing",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Booking.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Booking.hasMany(Notification, {
  foreignKey: "bookingId",
  as: "notifications",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Booking.hasOne(Review, {
  foreignKey: "bookingId",
  as: "review",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

export default Booking;

