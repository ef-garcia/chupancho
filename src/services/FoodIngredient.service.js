import Food_Ingredients_Table from "../models/Food_Ingredients.table.js";


class FoodIngredientService {

    constructor() {}

    async getAllFoodIngretients() {
        const foodIngredients = await Food_Ingredients_Table.findAll();
        return foodIngredients;
    }

    async getFoodIngredientById( id ) {
        const foodIngredient = await Food_Ingredients_Table.findByPk( id );
        return foodIngredient;
    }

    async createFoodIngrediet( data ) {
        const newFoodIngredient = await Food_Ingredients_Table.create( data );
        return newFoodIngredient;
    }

    async updateFoodIngredient(id, data) {
        const updateFoodIngredient = await Food_Ingredients_Table.update(data, { where: {id} });
        return updateFoodIngredient;
    }

    async deleteFoodIngredient( id ) {
        const deleteFoodIngredient = await Food_Ingredients_Table.destroy({ where: {id} });
        return deleteFoodIngredient;
    }

}


export default new FoodIngredientService()