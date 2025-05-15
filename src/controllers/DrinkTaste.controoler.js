import DrinkTasteService from '../services/DrinkTaste.service.js';


class DrinkTasteController {

    constructor() {}

    async getAllDrinkTastes(req, res) {
        try {
            const drinkTastes = await DrinkTasteService.getAllDrikTastes();

            if(!drinkTastes) {
                return res.status(404).send({
                    status: 404,
                    message: "No se ha podido encontrar los tragos."
                })
            }

            res.status(200).json({ drinkTastes });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getDrinkTasteById(req, res) {
        try {
            const { id } = req.params;
            const drinkTaste = await DrinkTasteService.getDrinkTasteById( id );

            if(!drinkTaste) {
                return res.status(404).send({
                    status: 404,
                    message: "No se ha podido encontrar el trago."
                })
            }

            res.status(200).json({ drinkTaste });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createDrinkTaste(req, res) {
        try {
            const data = req.body;
            const newDrinkTaste = await DrinkTasteService.createDrinkTaste( data );

            if(!newDrinkTaste) {
                return res.status(404).send({
                    status: 404,
                    message: "No se ha podido crear el trago."
                })
            }

            res.status(200).send({ newDrinkTaste });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateDrinkTaste(req, res) {
        try {
            const { id } = req.params;
            const data = req.body;
            const updateDrinkTaste = await DrinkTasteService(id, data);

            if(!updateDrinkTaste) {
                return res.status(404).send({
                    status: 404,
                    message: "No se ha podido actualizar el trago."
                })
            }

            res.status(200).json({ updateDrinkTaste });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteDrinkTaste(req, res) {
        try {
            const { id } = req.params;
            const deleteDrinkTaste = await DrinkTasteService.deleteDrinkTaste( id );

            if(!deleteDrinkTaste) {
                return res.status(404).send({
                    status: 404,
                    message: "No se ha podido eliminar el trago."
                })
            }
        } catch (error) {
            
        }
    }

}


export default new DrinkTasteController()