import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";
import LocalModel from "./Local.model.js";
import ShotModel from "./Shot.model.js";


const Local_Shot_Table = sequelize.define(
    'local_shot',
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
        shotId: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            references: {
                model: ShotModel,
                key: 'id'
            },
            allowNull: false
        }
    }
)

export default Local_Shot_Table