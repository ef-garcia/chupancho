import DrinkTasteModel from "../models/DrinkTaste.model.js";


class DrinkTasteService {

    constructor() {}

    async getAllDrikTastes() {
        const drinkTastes = await DrinkTasteModel.findAll();
        return drinkTastes;
    }

    async getDrinkTasteById( id ) {
        const drinkTaste = await DrinkTasteModel.findByPk( id );
        return drinkTaste;
    }

    async createDrinkTaste( data ) {
        const newDrinkTaste = await DrinkTasteModel.create( data );
        return newDrinkTaste;
    }

    async updateDrinkTaste(id, data) {
        const updateDrinkTaste = await DrinkTasteModel.update(data, { where: {id} });
        return updateDrinkTaste;
    }

    async deleteDrinkTaste( id ) {
        const deleteDrinkTaste = await DrinkTasteModel.destroy({ where: {id} });
        return deleteDrinkTaste;
    }

}


export default new DrinkTasteService()