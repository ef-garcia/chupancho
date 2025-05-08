import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const DrinkTasteModel = sequelize.define(
    'drink_taste',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
)

export default DrinkTasteModel