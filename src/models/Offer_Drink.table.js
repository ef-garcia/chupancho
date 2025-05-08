import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";
import OfferModel from "./Offer.model.js";
import DrinkModel from "./Drink.model.js";


const Offer_Drink_Table = sequelize.define(
    'offer_drink',
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
        drinkId: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            references: {
                model: DrinkModel,
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

export default Offer_Drink_Table