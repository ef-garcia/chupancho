import LocalService from "../services/Local.service.js";


class LocalController {

    constructor() {}

    async getAllLocals(req, res) {
        try {
            const locals = await LocalService.getAllLocals();

            if( !locals || locals.length === 0 ) {
                return res.status(404).send({
                    status: 404,
                    message: "No se han encontrado a los locales."
                })
            }

            res.status(200).json({ locals });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getLocalById(req, res) {
        try {
            const { id } = req.params;
            let local = await LocalService.getLocalById( id );

            if(!local) {
                return res.status(404).send({
                    status: 404,
                    message: "No se ha encontrado el local."
                })
            }

            res.status(200).json({ local });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createLocal(req, res) {
        try {
            const data = req.body;
            const newLocal = await LocalService.createLocal( data );

            if(!newLocal) {
                return res.status(404).send({
                    status: 404,
                    message: "No se ha podido crear el local."
                })
            }

            res.status(200).json({ newLocal });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateLocal(req, res) {
        try {
            const { id } = req.params;
            const data = req.body;
            const updateLocal = await LocalService.updateLocal(id, data);

            if(!updateLocal) {
                return res.status(404).send({
                    status: 404,
                    message: "No se ha podido actualizar el local."
                })
            }

            res.status(200).json({ updateLocal });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteLocal(req, res) {
        try {
            const { id } = req.params;
            const deleteLocal = await LocalService.deleteLocal( id );

            if(!deleteLocal) {
                return res.status(404).send({
                    status: 404,
                    message: "No se ha podido eliminar el local."
                })
            }

            res.status(200).json({ deleteLocal });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}


export default new LocalController()