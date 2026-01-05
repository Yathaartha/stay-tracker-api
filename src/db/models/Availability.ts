import { Model, DataTypes } from "sequelize";
import sequelize from "../index.js";
import Listing from "./Listing.js";

class Availability extends Model {
  id!: string;
  listingId!: string;
  startDate!: Date;
  endDate!: Date;
  priceOverride?: number | null;
  isAvailable!: boolean;
}

Availability.init(
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
    priceOverride: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      field: "price_override",
    },
    isAvailable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      field: "is_available",
    },
  },
  {
    sequelize,
    modelName: "Availability",
    tableName: "Availabilities",
    timestamps: true,
  }
);

Availability.belongsTo(Listing, {
  foreignKey: "listingId",
  as: "listing",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

export default Availability;

