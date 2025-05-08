import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const ShotModel = sequelize.define(
    'shots',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        size: {
            type: DataTypes.ENUM("chico", "mediano", "grande"),
            defaultValue: "grande",
            allowNull: false
        },
    }
)

export default ShotModel