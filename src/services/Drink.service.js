import DrinkModel from "../models/Drink.model.js";


class DrinkService {
    
    constructor() {}

    async getAllDrinks() {
        const drinks = await DrinkModel.findAll();
        return drinks;
    }

    async getDrinkById( id ) {
        const drink = await DrinkModel.findByPk( id );
        return drink;
    }

    async createDrink( data ) {
        const newDrink = await DrinkModel.create( data );
        return newDrink;
    }

    async updateDrink(id, data) {
        const updateDrink = await DrinkModel.update(data, { where: {id} } );
        return updateDrink;
    }

    async deleteDrink( id ) {
        const deleteDrink = await DrinkModel.destroy({ where: {id} });
        return deleteDrink;
    }

}


export default new DrinkService()