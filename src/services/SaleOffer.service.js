import Sale_Offer_Table from "../models/Sale_Offer.table.js";



class SaleOfferService {

    constructor() {}

    async getAllSaleOffers() {
        const saleOffers = await Sale_Offer_Table.findAll();
        return saleOffers;
    }

    async getSaleOfferById( id ) {
        const saleOffer = await Sale_Offer_Table.findByPk( id );
        return saleOffer;
    }

    async createSaleOffer( data ) {
        const newSaleOffer = await Sale_Offer_Table.create( data );
        return newSaleOffer;
    }

    async updateSaleOffer(id, data) {
        const updataSaleOfer = await Sale_Offer_Table.update(data, { where: {id} });
        return updataSaleOfer;
    }

    async deleteSaleOffer( id ) {
        const deleteSaleOffer = await Sale_Offer_Table.destroy({ where: {id} });
        return deleteSaleOffer;
    }

}


export default SaleOfferService()