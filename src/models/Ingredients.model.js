import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const IngredientsModel = sequelize.define(
    'ingredients',
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

export default IngredientsModel