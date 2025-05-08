import Lot_Ingredients_Table from "../models/Lot_Ingredients.table.js";



class LotIngredientService {

    constructor() {}

    async getAllLotIngredients() {
        const lotIngredients = await Lot_Ingredients_Table.findAll();
        return lotIngredients;
    }

    async getLotIngredientById( id ) {
        const lotIngredient = await Lot_Ingredients_Table.findByPk( id );
        return lotIngredient;
    }

    async createLotIngredient( data ) {
        const newLotIngredient = await Lot_Ingredients_Table.create( data );
        return newLotIngredient;
    }

    async updateLotIngredient(id, data) {
        const updateLotIngredient = await Lot_Ingredients_Table.update(data, { where: {id} });
        return updateLotIngredient;
    }

    async deleteLotIngredient( id ) {
        const deleteLotIngredient = await Lot_Ingredients_Table.destroy({ where: {id} });
        return deleteLotIngredient;
    }

}


export default new LotIngredientService()