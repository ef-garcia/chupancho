import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";
import FoodModel from "./Food.model.js";
import IngredientModel from "./Ingredient.model.js"


const Food_Ingredients_Table = sequelize.define(
    'food_ingredient',
    {
        foodId: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            references: {
                model: FoodModel,
                key: 'id'
            },
            allowNull: false
        },
        ingredientsId: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            references: {
                model: IngredientModel,
                key: 'id'
            },
            allowNull: false
        }
    }
)

export default Food_Ingredients_Table