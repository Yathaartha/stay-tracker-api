import sequelize from "../db/index.js";
import { DataTypes, Model } from "sequelize";

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

export default User;

