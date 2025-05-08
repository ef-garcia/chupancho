import DrinkService from "../services/Drink.service.js";


class DrinkController {

    constructor() {}

    async getAllDrinks(req, res) {
        try {
            const drinks = await DrinkService.getAllDrinks();

            if(!drinks) {
                return res.status(404).send({
                    status: 404,
                    message: "No se han encontrado las bebidas."
                })
            }

            res.status(200).json({ drinks });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getDrinkById(req, res) {
        try {
            const { id } = req.params;
            const drink = await DrinkService.getDrinkById( id );

            if(!drink) {
                return res.status(404).send({
                    status: 404,
                    message: "No se ha podido encontrar la bedida."
                })
            }

            res.status(200).json({ drink });
        } catch (error) {
            res.status(500).jsnon({ error: error.message });
        }
    }

    async createDrink(req, res) {
        try {
            const data = req.body;
            const newDrink = await DrinkService.createDrink( data );

            if(!newDrink) {
                return res.status(404).send({
                    status: 404,
                    message: "No se ha podido crear el usuario."
                })
            }

            res.status(200).json({ newDrink });
        } catch (error) {
            res.status(500).jsnon({ error: error.message });
        }
    }

    async updateDrink(req, res) {
        try {
            const { id } = req.params;
            const data = req.body;
            const updateDrink = await DrinkService.updateDrink(id, data);

            if(!updateDrink) {
                return res.status(404).send({
                    status: 404,
                    message: "No se ha podido actualizar la bebida."
                })
            }

            res.status(200).json({ updateDrink });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteDrink(req, res) {
        try {
            const { id } = req.params;
            const deleteDrink = await DrinkService.deleteDrink( id );

            if(!deleteDrink) {
                return res.status(404).send({
                    status: 404,
                    message: "No se a podido eliminar la bebida."
                })
            }

            res.status(200).json({ deleteDrink });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}


export default new DrinkController()