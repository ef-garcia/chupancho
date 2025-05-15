import IngredientService from '../services/Ingredient.service.js';


class IngredientController {

    constructor() {}

    async getAllIngredients(req, res) {
        try {
            const ingredients = await IngredientService.getAllIngedients();

            if(!ingredients) {
                return res.status(404).send({
                    status: 404,
                    message: "No se han encontrado los ingredientes."
                })
            }

            res.status(200).json({ ingredients });
        } catch (error) {
            res.status(500).json({ error: error.message });     
        }
    }

    async getIngredientById(req, res) {
        try {
            const { id } = req.params;
            const ingredient = await IngredientService.getAllIngedientById( id );

            if(!ingredient) {
                return res.status(404).send({
                    status: 404,
                    message: "No se ha podido encontrar el ingrediente."
                })
            }

            res.status(200).send({ ingredient });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createIngredient(req, res) {
        try {
            const data = req.body;
            const newIngredient = await IngredientService.createIngredient( data );

            if(!newIngredient) {
                return res.status(404).send({
                    status: 404,
                    message: "No se ha podido crear el ingrediente."
                })
            }

            res.status(200).json({ newIngredient });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateIngredient(req, res) {
        try {
            const { id } = req.params;
            const data = req.body;
            const updateIngredient = await IngredientService.updateIngredient(id, data);

            if(!updateIngredient) {
                return res.status(404).send({
                    status: 404,
                    message: "No se ha podido actualizar el ingrediente."
                })
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteIngredient(req, res) {
        try {
            const { id } = req.params;
            const deleteIngredient = await IngredientService.deleteIngredient( id );

            if(!deleteIngredient) {
                return res.status(404).send({
                    status: 404,
                    message: "No se ha podido eliminar el ingrediente."
                })
            }
        } catch (error) {
            
        }
    }

}


export default new IngredientController()