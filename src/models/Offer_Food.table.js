import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";
import OfferModel from "./Offer.model.js";
import FoodModel from "./Food.model.js"


const Offer_Food_Table = sequelize.define(
    'offer_food',
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
        foodId: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            references: {
                model: FoodModel,
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

export default Offer_Food_Table