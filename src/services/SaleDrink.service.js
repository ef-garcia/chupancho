import Sale_Drink_Table from "../models/Sale_Drink.table.js";



class SaleDrinkService {

    constructor() {}

    async getAllSaleDrinks() {
        const saleDrinks = await Sale_Drink_Table.findAll();
        return saleDrinks;
    }

    async getSaleDrinkById( id ) {
        const saleDrink = await Sale_Drink_Table.findByPk( id );
        return saleDrink;
    }

    async createSaleDrink( data ) {
        const newSaleDrink = await Sale_Drink_Table.create( data );
        return newSaleDrink;
    }

    async updataSaleDrink(id, data) {
        const updataSaleDrink = await Sale_Drink_Table.update(data, { where: {id} });
        return updataSaleDrink;
    }

    async deleteSaleDrink( id ) {
        const deleteSaleDrink = await Sale_Drink_Table.destroy({ where: {id} });
        return deleteSaleDrink;
    }

}


export default new SaleDrinkService()