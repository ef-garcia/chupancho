import IngredientModel from "../models/Ingredient.model.js";


class IngredientService {

    constructor() {}

    async getAllIngedients() {
        const ingredients = await IngredientModel.findAll();
        return ingredients;
    }

    async getAllIngedientById( id ) {
        const ingredient = await IngredientModel.findByPk( id );
        return ingredient;
    }

    async createIngredient( data ) {
        const newIngredient = await IngredientModel.create( data );
        return newIngredient;
    }

    async updateIngredient(id, data) {
        const updateIngredient = await IngredientModel.create(data, { where: {id} });
        return updateIngredient;
    }

    async deleteIngredient( id ) {
        const deleteIngredient = await IngredientModel.destroy({ where: {id} });
        return deleteIngredient;
    }

}


export default new IngredientService()