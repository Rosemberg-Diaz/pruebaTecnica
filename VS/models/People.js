import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize"

export const People = sequelize.define('people',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    firstName:{
        type: DataTypes.STRING,
    },
    lastName:{
        type: DataTypes.STRING,
    },
    dateOfBirth:{
        type: DataTypes.DATE,
        validate:{
            isAfter: "1900-01-01", 
            isBefore: "2012-01-01",
        }
    },
    sex:{
        type: DataTypes.STRING,
        validate: {
            isIn: [['F', 'M']],
          }
    },
    email:{
        type: DataTypes.STRING,
        validate: {
          isEmail: true
        }
    },
    telephone:{
        type: DataTypes.STRING,
        validate: {
          isNumeric: true
        }
    },
    cellphone:{
        type: DataTypes.STRING,
        validate: {
          isNumeric: true
        }
    },
    city:{
        type: DataTypes.STRING,
    },
},{
    timetamps: false,
});