import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const TypeFoodModel = sequelize.define(
    'type_food',
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

export default TypeFoodModel