import UserModel from "../models/User.model.js";



class UserService {

    constructor() {}

    async getAllUsers() {
        const users = await UserModel.findAll();
        return users;
    }

    async getUserById( id ) {
        const user = await UserModel.findByPk( id );
        return user;
    }

    async createUser( data ) {
        const newUser = await UserModel.create( data );
        return newUser;
    }

    async updateUser(id, data) {
        const updateUser = await UserModel.update(data, { where: {id} } );
        return updateUser;
    }

    async deleteUser( id ) {
        const deleteUser = await UserModel.destroy({ where: {id} });
        return deleteUser;
    }

}

export default new UserService()