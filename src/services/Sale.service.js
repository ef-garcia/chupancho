import SaleModel from "../models/Sale.model.js";



class SaleService {

    constructor() {}

    async getAllSales() {
        const sales = await SaleModel.findAll();
        return sales;
    }

    async getSaleById( id ) {
        const sale = await SaleModel.findByPk( id );
        return sale;
    }

    async createSale( data ) {
        const newSale = await SaleModel.create( data );
        return newSale;
    }

    async updateSale(id, data) {
        const updateSale = await SaleModel.update(data, { where: {id} });
        return updateSale;
    }

    async deleteSale( id ) {
        const deleteSale = await SaleModel.destroy({ where: {id} });
        return deleteSale;
    }

}


export default new SaleService()