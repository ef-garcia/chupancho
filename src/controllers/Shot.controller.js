import ShotService from "../services/Shot.service.js";


class ShotController {

    constructor() {}

    async getAllShots(req, res) {
        try {
            const shots = await ShotService.getAllShots();

            if(!shots) {
                return res.status(404).send({
                    status: 404,
                    message: "No se han encontrado los tragos."
                })
            }

            res.status(200).json({ shots });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getShotsById(req, res) {
        try {
            const { id } = req.params;
            const shot = await ShotService.getShotById( id );

            if(!shot) {
                return res.status(404).send({
                    status: 404,
                    message: "No se ha encontrado el trago."
                })
            }

            res.status(200).json({ shot });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createShot(req, res) {
        try {
            const data = req.body;
            const newShot = await ShotService.createShot( data );

            if(!newShot) {
                return res.status(404).send({
                    status: 404,
                    message: "No se ha podido crear el trago."
                })
            }

            res.status(200).json({ newShot });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateShot(req, res) {
        try {
            const { id } = req.params;
            const data = req.body;
            const updateShot = await ShotService.updateShot(id, data);

            if(!updateShot) {
                return res.status(404).send({
                    status: 404,
                    message: "No se ha podido actualizar el trago."
                })
            }

            res.status(200).json({ updateShot });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteShot(req, res) {
        try {
            const { id } = req.params;
            const deleteShot = await ShotService.deleteShot( id );

            if(!deleteShot) {
                return res.status(404).send({
                    status: 404,
                    message: "No se ha podido eliminar el trago."
                })
            }
        } catch (error) {
            
        }
    }

}


export default new ShotController()