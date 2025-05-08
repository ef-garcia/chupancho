import OfferModel from "../models/Offer.model.js";


class OfferService {

    constructor() {}

    async getAllOffers() {
        const offers = await OfferModel.findAll();
        return offers;
    }

    async getOfferById( id ) {
        const offer = await OfferModel.findByPk( id );
        return offer;
    }

    async createOffer( data ) {
        const newOffer = await OfferModel.create( data );
        return newOffer;
    }

    async updateOffer(id, data) {
        const updateOffer = await OfferModel.update(data, { where: {id} } );
        return updateOffer;
    }

    async deleteOffer( id ) {
        const deleteOffer = await OfferModel.destroy({ where: {id} });
        return deleteOffer;
    } 

}

export default new OfferService()