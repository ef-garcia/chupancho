import Local_Food_Table from "../models/Local_Food.table.js";


class LocalFoodService {

    constructor() {}

    async getAllLocalFoods() {
        const localFoods = await Local_Food_Table.findAll();
        return localFoods;
    }

    async getLocalFoodById( id ) {
        const localFood = await Local_Food_Table.findByPk( id );
        return localFood;
    }

    async createLocalFood( data ) {
        const newLocalFood = await Local_Food_Table.create( data );
        return newLocalFood;
    }

    async updateLocalFood(id, data) {
        const updateLocalFood = await Local_Food_Table.update(data, { where: {id} });
        return updateLocalFood;
    }

    async deleteLocalFood( id ) {
        const deleteLocalFood = await Local_Food_Table.destroy({ where: {id} });
        return deleteLocalFood;
    }

}


export default new LocalFoodService()