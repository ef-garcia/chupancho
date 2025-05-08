import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";
import OfferModel from "./Offer.model.js";
import ShotModel from "./Shot.model.js";


const Offer_Shot_Table = sequelize.define(
    'offer_shot',
    {
        offerId: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            references: {
                model: OfferModel,
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
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }
)

export default Offer_Shot_Table