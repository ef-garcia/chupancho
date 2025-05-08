import Offer_Shot_Table from "../models/Offer_Shot.table.js";


class OfferShotService {

    constructor() {}

    async getAllOfferShots() {
        const offerFoods = await Offer_Shot_Table.findAll();
        return offerFoods;
    }

    async getOfferShotById( id ) {
        const offerShot = await Offer_Shot_Table.findByPk( id );
        return offerShot;
    }

    async createOfferShot( data ) {
        const newOfferShot = await Offer_Shot_Table.create( data );
        return newOfferShot;
    }

    async updateOfferShot(id, data) {
        const updateOfferShot = await Offer_Shot_Table.update(data, { where: {id} });
        return updateOfferShot;
    }

    async deleteOfferShot( id ) {
        const deleteOfferShot = await Offer_Shot_Table.destroy({ where: {id} });
        return deleteOfferShot;
    }

}


export default new OfferShotService()