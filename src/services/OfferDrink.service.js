import Offer_Drink_Table from "../models/Offer_Drink.table.js";


class OfferDrinkService {

    constructor() {}

    async getAllOfferDrinks() {
        const offerDrinks = await Offer_Drink_Table.findAll();
        return offerDrinks;
    }

    async getOfferDrinkById( id ) {
        const offerDrink = await Offer_Drink_Table.findByPk( id );
        return offerDrink;
    }

    async createOfferDrink( data ) {
        const newOfferDrink = await Offer_Drink_Table.create( data );
        return newOfferDrink;
    }

    async updateOfferDrink(id, data) {
        const updateOfferDrink = await Offer_Drink_Table.update(data, { where: {id} } );
        return updateOfferDrink;
    }

    async deleteOfferDrink( id ) {
        const deleteOfferDrink = await Offer_Drink_Table.destroy({ where: {id} });
        return deleteOfferDrink;
    } 

}

export default new OfferDrinkService()