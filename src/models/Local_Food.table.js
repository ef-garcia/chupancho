import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";
import LocalModel from "./Local.model.js";
import FoodModel from "./Food.model.js"


const Local_Food_Table = sequelize.define(
    'local_food',
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

export default Local_Food_Table