import TypeFoodModel from "../models/TypeFood.model.js";



class TypeFoodService {

    constructor() {}

    async getAllTypeFoods() {
        const typeFoods = await TypeFoodModel.findAll();
        return typeFoods;
    }

    async getTypeFoodById( id ) {
        const typeFood = await TypeFoodModel.findByPk( id );
        return typeFood;
    }

    async createTypeFood( data ) {
        const newTypeFood = await TypeFoodModel.create( data );
        return newTypeFood;
    }

    async updateTypeFood(id, data) {
        const updateTypeFood = await TypeFoodModel.update(data, { where: {id} });
        return updateTypeFood;
    }

    async deleteTypeFood( id ) {
        const deleteTypeFood = await TypeFoodModel.destroy({ where: {id} });
        return deleteTypeFood;
    }

}


export default TypeFoodService()