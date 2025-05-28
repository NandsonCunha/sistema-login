import { DataTypes } from "sequelize";
import sequelize from "../config/DB.js";

const User = sequelize.define("User", {
  name: { 
    type: DataTypes.STRING, 
    allowNull: false },
  email: { 
    type: DataTypes.STRING, 
    unique: true, 
    allowNull: false },
  password: { 
    type: DataTypes.STRING, 
    allowNull: false },
  role: { 
    type: DataTypes.ENUM('admin', 'user'),
    defaultValue: 'user',
    allowNull: false,
  }
}, {
        tableName: "User",
        timestamps: false
    });

export default User;
