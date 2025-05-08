import ShotModel from "../models/Shot.model.js";



class ShotService {

    constructor() {}

    async getAllShots() {
        const shots = await ShotModel.findAll();
        return shots;
    }

    async getShotById( id ) {
        const shot = await ShotModel.findByPk( id );
        return shot;
    }

    async createShot( data ) {
        const newShot = await ShotModel.create( data );
        return newShot;
    }

    async updateShot(id, data) {
        const updateShot = await ShotModel.update(data, { where: {id} });
        return updateShot;
    }

    async deleteShot( id ) {
        const deleteShot = await ShotModel.destroy({ where: {id} });
        return deleteShot;
    }

}


export default new ShotService()