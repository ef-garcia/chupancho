import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const LocalModel = sequelize.define(
    'locals',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
)

export default LocalModel