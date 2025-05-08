import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const MoneyModel = sequelize.define(
    'money',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        quantity: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    }
)

export default MoneyModel