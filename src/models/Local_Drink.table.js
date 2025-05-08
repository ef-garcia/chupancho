import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";
import LocalModel from "./Local.model.js";
import DrinkModel from "./Drink.model.js";


const Local_Drink_Table = sequelize.define(
    'local_drink',
    {
        localId: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            references: {
                model: LocalModel,
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

export default Local_Drink_Table