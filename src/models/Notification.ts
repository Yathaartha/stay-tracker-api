import { Model, DataTypes } from "sequelize";
import sequelize from "../db/index.js";
import User from "./User.js";
import Booking from "./Booking.js";

class Notification extends Model {
  public id!: string;
  public userId!: string;
  public bookingId!: string;
  public message!: string;
  public isRead!: boolean;
  public type!: "info" | "warning" | "alert";
}

Notification.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: "user_id",
    },
    bookingId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: "booking_id",
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isRead: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      field: "is_read",
    },
    type: {
      type: DataTypes.ENUM("info", "warning", "alert"),
      allowNull: false,
      defaultValue: "info",
    },
  },
  {
    sequelize,
    modelName: "Notification",
    tableName: "Notifications",
    timestamps: true,
  }
);

Notification.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Notification.belongsTo(Booking, {
  foreignKey: "bookingId",
  as: "booking",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

export default Notification;

