import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";
import SaleModel from "./Sale.model.js";
import DrinkModel from "./Drink.model.js"


const Sale_Drink_Table = sequelize.define(
    'sale_drink',
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

export default Sale_Drink_Table