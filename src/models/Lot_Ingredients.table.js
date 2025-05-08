import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";
import LotModel from "./Lot.model.js";
import IngredientsModel from "./Ingredients.model.js";


const Lot_Ingredients_Table = sequelize.define(
    'lot_ingredient',
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
        ingredientId: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            references: {
                model: IngredientsModel,
                key: 'id'
            },
            allowNull: false
        }
    }
)

export default Lot_Ingredients_Table