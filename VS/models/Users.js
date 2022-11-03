import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize"

export const Users = sequelize.define('users',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username:{
        type: DataTypes.STRING,
    },
    email:{
        type: DataTypes.STRING,
        validate: {
          isEmail: true
        }
    },
    password:{
        type: DataTypes.STRING,
    },
},{
    timetamps: false,
});