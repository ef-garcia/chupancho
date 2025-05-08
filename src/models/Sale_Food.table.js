import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";
import FoodModel from "./Food.model.js";
import SaleModel from "./Sale.model.js"


const Sale_Food_Table = sequelize.define(
    'sale_food',
    {
        saleId: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            references: {
                model: SaleModel,
                key: 'id'
            },
            allowNull: false
        },
        foodId: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            references: {
                model: FoodModel,
                key: 'id'
            },
            allowNull: false
        }
    }
)

export default Sale_Food_Table