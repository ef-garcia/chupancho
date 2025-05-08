import Shot_Drink_Table from "../models/Shot_Drink.table.js";



class ShotDrinkService {

    constructor() {}

    async getAllShotDrints() {
        const shotDrinks = await Shot_Drink_Table.findAll();
        return shotDrinks;
    }

    async getShotById( id ) {
        const shotDrink = await Shot_Drink_Table.findByPk( id );
        return shotDrink;
    }

    async createShotDrink( data ) {
        const newShotDrink = await Shot_Drink_Table.create( data );
        return newShotDrink;
    }

    async updateShotDrink(id, data) {
        const updataSaleDrink = await Shot_Drink_Table.update(data, { where: {id} });
        return updataSaleDrink;
    }

    async deleteShotDrink( id ) {
        const deleteShotDrink = await Shot_Drink_Table.destroy({ where: {id} });
        return deleteShotDrink;
    }

}


export default new ShotDrinkService()