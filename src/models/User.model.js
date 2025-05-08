import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const UserModel = sequelize.define(
    'users',
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
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.ENUM("cajero", "cocinero", "admin"),
            defaultValue: "cajero",
            allowNull: false
        },
    }
)

export default UserModel