import { DataTypes, Model } from "sequelize";
import sequelize from "../index.js";
import User from "./User.js";

class UserProfile extends Model {
  public id!: string;
  public userId!: string;
  public firstName!: string;
  public lastName!: string;
  public middleName?: string | null;
  public dateOfBirth!: Date;
  public phoneNumber!: string;
  public email!: string;
  public streetAddress!: string;
  public city!: string;
  public state!: string;
  public zipCode!: string;
  public country!: string;
}

UserProfile.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: true,
      field: "user_id",
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "first_name",
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "last_name",
    },
    middleName: {
      type: DataTypes.STRING,
      allowNull: true,
      field: "middle_name",
    },
    dateOfBirth: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: "date_of_birth",
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "phone_number",
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    streetAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "street_address",
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
  },
  {
    sequelize,
    modelName: "UserProfile",
    tableName: "UserProfiles",
    timestamps: true,
  }
);

UserProfile.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

export default UserProfile;

