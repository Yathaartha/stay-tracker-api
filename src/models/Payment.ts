import { Model, DataTypes } from "sequelize";
import sequelize from "../db/index.js";

class Payment extends Model {
  public id!: string;
  public bookingId!: string;
  public status!: "pending" | "completed" | "failed" | "refunded";
  public amount!: number;
  public paymentMethod!: "credit_card" | "paypal" | "bank_transfer";
}

Payment.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    bookingId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: "booking_id",
    },
    status: {
      type: DataTypes.ENUM("pending", "completed", "failed", "refunded"),
      allowNull: false,
      defaultValue: "pending",
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    paymentMethod: {
      type: DataTypes.ENUM("credit_card", "paypal", "bank_transfer"),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Payment",
    tableName: "Payments",
    timestamps: true,
  }
);

export default Payment;

