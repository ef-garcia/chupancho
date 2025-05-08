import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";
import ShotModel from "./Shot.model.js";
import DrinkModel from "./Drink.model.js";


const Shot_Drink_Table = sequelize.define(
    'shot_drink',
    {
        shotId: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            references: {
                model: ShotModel,
                key: 'id'
            },
            allowNull: false
        },
        drinkId: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            references: {
                model: DrinkModel,
                key: 'id'
            },
            allowNull: false
        }
    }
)

export default Shot_Drink_Table