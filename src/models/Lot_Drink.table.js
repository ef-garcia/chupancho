import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";
import LotModel from "./Lot.model.js";
import DrinkModel from "./Drink.model.js";


const Lot_Drink_Table = sequelize.define(
    'lot_drink',
    {
        lotId: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            references: {
                model: LotModel,
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

export default Lot_Drink_Table