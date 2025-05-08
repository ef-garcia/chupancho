import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const LotModel = sequelize.define(
    'lots',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        expiration_date: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }
)

export default LotModel