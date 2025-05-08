import OfferService from "../services/Offer.service.js";
import OfferDrinkService from "../services/OfferDrink.service.js";
import OfferFoodService from "../services/OfferFood.service.js";
import OfferShotService from "../services/OfferShot.service.js";


class OfferController {

    constructor() {}

    async getAllOffers(req, res) {
        try {
            const offers = await OfferService.getAllOffers();

            if(!offers) {
                return res.status(404).send({
                    status: 404,
                    message: "No he han encontrado las ofertas."
                })
            }

            res.status(200).json({ offers });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getOfferById(req, res) {
        try {
            const { id } = req.params;
            const offer = await OfferService.getOfferById( id );

            if(!offer) {
                return res.status(404).send({
                    status: 404,
                    message: "No se ha podido encontrar la oferta."
                })
            }

            res.status(200).json({ offer });
        } catch (error) {
            res.status(505).json({ error: error.message });
        }
    }

    async createOffer(req, res) {
        try {
            const data = req.body;
            const newOffer = await OfferService.createOffer( data );
            

            if(!newOffer) {
                return res.status(404).send({
                    status: 404,
                    message: "No se ha podido crear la oferta."
                })
            }

            if(data.drinks.length) {
                data.drinks.forEach( async(d) => {
                    await OfferDrinkService.createOfferDrink({
                        offerId: newOffer.id,
                        drinkId: d.id,
                        quantity: d.quantity
                    })
                });
            }

            if(data.foods.length) {
                data.foods.forEach( async(f) => {
                    await OfferFoodService.createOfferFood({
                        offerId: newOffer.id,
                        drinkId: f.id,
                        quantity: f.quantity
                    })
                });
            }
            
            if(data.shots.length) {
                data.shots.forEach( async(s) => {
                    await OfferShotService.createOfferShot({
                        offerId: newOffer.id,
                        drinkId: s.id,
                        quantity: s.quantity
                    })
                });
            }


            res.status(200).json({ newOffer });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateOffer(req, res) {
        try {
            const { id } = req.params;
            const data = req.body;
            const updateOffer = await OfferService.updateOffer(id, data);

            if(!updateOffer) {
                return res.status(404).send({
                    status: 404,
                    message: "No se ha podido actualizar la oferta."
                })
            }

            res.status(200).json({ updateOffer });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteOffer(req, res) {
        try {
            const { id } = req.params;
            const deleteOffer = await OfferService.deleteOffer( id );

            if(!deleteOffer) {
                return res.status(404).send({
                    status: 404,
                    message: "No se ha podido eliminar la oferta."
                })
            }

            res.status(200).json({ deleteOffer });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}

export default new OfferController()