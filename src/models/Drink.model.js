import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const DrinkModel = sequelize.define(
    'drinks',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.ENUM("gaseosa", "alcohol", "agua"),
            defaultValue: "gaseosa",
            allowNull: false
        },
        capacity: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    }
)

export default DrinkModel