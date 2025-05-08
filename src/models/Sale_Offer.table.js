import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";
import SaleModel from "./Sale.model.js";
import OfferModel from "./Offer.model.js";


const Sale_Offer_Table = sequelize.define(
    'sale_offer',
    {
        saleId: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            references: {
                model: SaleModel,
                key: 'id'
            },
            allowNull: false
        },
        offerId: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            references: {
                model: OfferModel,
                key: 'id'
            },
            allowNull: false
        }
    }
)

export default Sale_Offer_Table