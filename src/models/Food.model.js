import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const FoodModel = sequelize.define(
    'foods',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }
)

export default FoodModel