import FoodService from '../services/Food.service.js';


class FoodController {

    constructor() {}

    async getAllFoods(req, res) {
        try {
            const foods = await FoodService.getAllFoods();

            if(!foods) {
                return res.status(404).send({
                    status: 404,
                    message: "No se han encontrado las comidas."
                })
            }

            res.status(200).json({ foods });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getFoodById(req, res) {
        try {
            const { id } = req.params;
            const food = await FoodService.getFoodById( id );

            if(!food) {
                return res.status(404).send({
                    status: 404,
                    message: "No se ha podido encontrar la comida."
                })
            }

            res.status(200).json({ food });
        } catch (error) {
            
        }
    }

    async createFood(req, res) {
        try {
            const data = req.body;
            const newFood = await FoodService.createFood( data );

            if(!newFood) {
                return res.status(404).send({
                    status: 404,
                    message: "No se ha podido crear la comida."
                })
            }
            
            res.status(200).json({ newFood });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateFood(req, res) {
        try {
            const { id } = req.params;
            const data = req.bosy;
            const updateFood = await FoodService.updateFood(id, data);

            if(!updateFood) {
                return res.status(404).send({
                    status: 404,
                    message: "No se a podido actualizar la comida."
                })
            }

            res.status(200).json({ updateFood });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteFood(req, res) {
        try {
            const { id } = req.params;
            const deleteFood = await FoodService.deleteFood( id );

            if(!deleteFood) {
                return res.status(404).send({
                    status: 404,
                    message: "No se ha podido eliminar la comida."
                })
            }

            res.status(200).json({ deleteFood });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}


export default new FoodController()