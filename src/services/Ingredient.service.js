import IngredientsModel from "../models/Ingredients.model.js";


class IngredientService {

    constructor() {}

    async getAllIngedients() {
        const ingredients = await IngredientsModel.findAll();
        return ingredients;
    }

    async getAllIngedientById( id ) {
        const ingredient = await IngredientsModel.findByPk( id );
        return ingredient;
    }

    async createIngredient( data ) {
        const newIngredient = await IngredientsModel.create( data );
        return newIngredient;
    }

    async updateIngredient(id, data) {
        const updateIngredient = await IngredientsModel.create(data, { where: {id} });
        return updateIngredient;
    }

    async deleteIngredient( id ) {
        const deleteIngredient = await IngredientsModel.destroy({ where: {id} });
        return deleteIngredient;
    }

}


export default new IngredientService()