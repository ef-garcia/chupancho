import Local_Drink_Table from "../models/Local_Drink.table.js";


class LocalDrinkService {

    constructor() {}

    async getAllLocalDrinks() {
        const localDrinks = await Local_Drink_Table.findAll();
        return localDrinks;
    }

    async getLocalDrinkById( id ) {
        const localDrink = await Local_Drink_Table.findByPk( id );
        return localDrink;
    }

    async createLocalDrink( data ) {
        const newLocalDrink = await Local_Drink_Table.create( data );
        return newLocalDrink;
    }

    async updateLocalDrink(id, data) {
        const updateLocalDrink = await Local_Drink_Table.update(data, { where: {id} });
        return updateLocalDrink;
    }

    async deleteLocalDrink( id ) {
        const deleteDrinkTaste = await Local_Drink_Table.destroy({ where: {id} });
        return deleteDrinkTaste;
    }

}


export default new LocalDrinkService()