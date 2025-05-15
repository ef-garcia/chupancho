import sequelize from "./db.js";

import LocalModel from "../models/Local.model.js";
import DrinkModel from "../models/Drink.model.js";
import FoodModel from "../models/Food.model.js";
import ShotModel from "../models/Shot.model.js";
import IngredientModel from "../models/Ingredient.model.js";
import LotModel from "../models/Lot.model.js";
import OfferModel from "../models/Offer.model.js";
import SaleModel from "../models/Sale.model.js";

import Local_Drink_Table from "../models/Local_Drink.table.js";
import Local_Food_Table from "../models/Local_Food.table.js";
import Local_Shot_Table from "../models/Local_Shot.table.js";
import Food_Ingredients_Table from "../models/Food_Ingredients.table.js";
import Lot_Drink_Table from "../models/Lot_Drink.table.js";
import Lot_Ingredients_Table from "../models/Lot_Ingredients.table.js";
import Offer_Drink_Table from "../models/Offer_Drink.table.js";
import Offer_Food_Table from "../models/Offer_Food.table.js";
import Offer_Shot_Table from "../models/Offer_Shot.table.js";
import Shot_Drink_Table from "../models/Shot_Drink.table.js";
import Sale_Drink_Table from "../models/Sale_Drink.table.js";
import Sale_Food_Table from "../models/Sale_Food.table.js";
import Sale_Offer_Table from "../models/Sale_Offer.table.js";



LocalModel.belongsToMany(DrinkModel, { through: Local_Drink_Table });
DrinkModel.belongsToMany(LocalModel, { through: Local_Drink_Table });

LocalModel.belongsToMany(FoodModel, { through: Local_Food_Table });
FoodModel.belongsToMany(LocalModel, { through: Local_Food_Table });

LocalModel.belongsToMany(ShotModel, { through: Local_Shot_Table });
ShotModel.belongsToMany(LocalModel, { through: Local_Shot_Table });

FoodModel.belongsToMany(IngredientModel, { through: Food_Ingredients_Table });
IngredientModel.belongsToMany(FoodModel, { through: Food_Ingredients_Table });

LotModel.belongsToMany(DrinkModel, { through: Lot_Drink_Table });
DrinkModel.belongsToMany(LotModel, { through: Lot_Drink_Table });

LotModel.belongsToMany(IngredientModel, { through: Lot_Ingredients_Table });
IngredientModel.belongsToMany(LotModel, { through: Lot_Ingredients_Table });

OfferModel.belongsToMany(DrinkModel, { through: Offer_Drink_Table });
DrinkModel.belongsToMany(OfferModel, { through: Offer_Drink_Table });

OfferModel.belongsToMany(FoodModel, { through: Offer_Food_Table });
FoodModel.belongsToMany(OfferModel, { through: Offer_Food_Table });

OfferModel.belongsToMany(ShotModel, { through: Offer_Shot_Table });
ShotModel.belongsToMany(OfferModel, { through: Offer_Shot_Table });

ShotModel.belongsToMany(DrinkModel, { through: Shot_Drink_Table });
DrinkModel.belongsToMany(ShotModel, { through: Shot_Drink_Table });

SaleModel.belongsToMany(DrinkModel, { through: Sale_Drink_Table });
DrinkModel.belongsToMany(SaleModel, { through: Sale_Drink_Table });

SaleModel.belongsToMany(FoodModel, { through: Sale_Food_Table });
FoodModel.belongsToMany(SaleModel, { through: Sale_Food_Table });

SaleModel.belongsToMany(OfferModel, { through: Sale_Offer_Table });
OfferModel.belongsToMany(SaleModel, { through: Sale_Offer_Table });

export default sequelize