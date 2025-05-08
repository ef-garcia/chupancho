import FoodModel from "../models/Food.model.js";


class FoodService {

    constructor() {}

    async getAllFoods() {
        const foods = await FoodModel.findAll();
        return foods;
    }

    async getFoodById( id ) {
        const food = await FoodModel.findByPk( id );
        return food;
    }

    async createFood( data ) {
        const newFood = await FoodModel.create( data );
        return newFood;
    }

    async updateFood(id, data) {
        const updateFood = await FoodModel.update(data, { where: {id} });
        return updateFood;
    }

    async deleteFood( id ) {
        const deleteFood = await FoodModel.destroy({ where: {id} });
        return deleteFood;
    }

}


export default new FoodService()