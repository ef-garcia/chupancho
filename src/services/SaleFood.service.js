import Sale_Food_Table from "../models/Sale_Food.table.js";



class SaleFoodService {

    constructor() {}

    async getAllSaleFoods() {
        const saleFoods = await Sale_Food_Table.findAll();
        return saleFoods;
    }

    async getSaleFoodById( id ) {
        const saleFood = await Sale_Food_Table.findByPk( id );
        return saleFood;
    }

    async createSaleFood( data ) {
        const newSaleFood = await Sale_Food_Table.create( data );
        return newSaleFood;
    }

    async updateSaleFood(id, data) {
        const updateSaleFood = await Sale_Food_Table.update(data, { where: {id} });
        return updateSaleFood;
    }

    async deleteSaleFood( id ) {
        const deleteSaleFood = await Sale_Food_Table.destroy({ where: {id} });
        return deleteSaleFood;
    }

}


export default new SaleFoodService()