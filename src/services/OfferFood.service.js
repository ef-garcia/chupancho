import Offer_Food_Table from "../models/Offer_Food.table.js";


class OfferFoodService {

    constructor() {}

    async getAllOfferFoods() {
        const offerFoods = await Offer_Food_Table.findAll();
        return offerFoods;
    }

    async getOfferFoodById( id ) {
        const offerFood = await Offer_Food_Table.findByPk( id );
        return offerFood;
    }

    async createOfferFood( data ) {
        const newOfferFood = await Offer_Food_Table.create( data );
        return newOfferFood;
    }

    async updateOfferFood(id, data) {
        const updateOfferFood = await Offer_Food_Table.update(data, { where: {id} } );
        return updateOfferFood;   
    }

    async deleteOfferFood( id ) {
        const deleteOfferFood = await Offer_Food_Table.destroy({ where: {id} });
        return deleteOfferFood;
    }

}

export default new OfferFoodService()