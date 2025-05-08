import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const SaleModel = sequelize.define(
    'sale',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        summary: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        paymenth_method: {
            type: DataTypes.ENUM("efectivo", "mercado-pago"),
            defaultValue: "efectivo",
            allowNull: false
        }
    }
)

export default SaleModel