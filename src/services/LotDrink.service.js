import Lot_Drink_Table from "../models/Lot_Drink.table.js";



class LotDrinkService {

    constructor() {}

    async getAllLotDrinks() {
        const lotDrinks = await Lot_Drink_Table.findAll();
        return lotDrinks;
    }

    async getLotDrinkById( id ) {
        const lotDrink = await Lot_Drink_Table.findByPk( id );
        return lotDrink;
    }

    async createLotDrink( data ) {
        const newLotDrink = await Lot_Drink_Table.create( data );
        return newLotDrink;
    }

    async updateLotDrink(id, data) {
        const updateLotDrink = await Lot_Drink_Table.update(data, { where: {id} });
        return updateLotDrink;
    }

    async deleteLotDrink( id ) {
        const deleteLotDrink = await Lot_Drink_Table.destroy({ where: {id} });
        return deleteLotDrink;
    }

}


export default new LotDrinkService()