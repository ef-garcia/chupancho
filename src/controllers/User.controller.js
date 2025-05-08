import UserService from "../services/User.service.js";


class UserController {

    constructor() {}

    async getAllUsers(req, res) {
        try {
            const users = await UserService.getAllUsers();

            if(!users || users.length === 0) {
                return res.status(404).send({
                    status: 404,
                    message: "No se han encontrado a los usuarios."
                })
            }

            res.status(200).json({ users });
        } catch (error) { 
            res.status(500).json({ error: error.message });
        }
    }

    async getUserById(req, res) {
        try {
            const { id } = req.params;
            let user = await UserService.getUserById( id );

            if(!user) {
                return res.status(404).send({
                    status: 404,
                    message: "No se ha encontrado el usuario."
                })
            }

            res.satatus(200).json({ user });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createUser(req, res) {
        try {
            const data = req.body;
            const newUser = await UserService.createUser( data );

            if(!newUser) {
                return res.status(404).send({
                    status:404,
                    message: "No se ha podido crear el usuario."
                })
            }

            res.status(200).json({ newUser })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async updateUser(req, res) {
        try {
            const { id } = req.params;
            const data = req.body;
            const updateUser = await UserService.updateUser(id, data);

            if(!updateUser) {
                return res.status(404).send({
                    status: 404,
                    message: "No se ha podido actualizar el usuario."
                })
            }

            res.status(200).json({ updateUser });
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async deleteUser(req, res) {
        try {
            const { id } = req.params;
            const deleteUser = await UserService.deleteUser( id );

            if(!deleteUser) {
                return res.status(404).send({
                    status: 404,
                    message: "No se ha podido eliminar el usuario."
                })
            }

            res.status(200).json({ deleteUser });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}


export default new UserController()