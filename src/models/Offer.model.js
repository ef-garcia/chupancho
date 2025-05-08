import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const OfferModel = sequelize.define(
    'offer',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        available: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    }
)

export default OfferModel