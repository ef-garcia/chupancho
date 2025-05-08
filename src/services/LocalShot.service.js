import Local_Shot_Table from "../models/Local_Shot.table.js";


class LocalShotService {

    constructor() {}

    async getAllLocalShots() {
        const localShots = await Local_Shot_Table.findAll();
        return localShots;
    }

    async getLocalShotById( id ) {
        const localShot = await Local_Shot_Table.findByPk( id );
        return localShot;
    }

    async createLocalShot( data ) {
        const newLocalShot = await Local_Shot_Table.create( data );
        return newLocalShot;
    }

    async updateLocalShot(id, data) {
        const updateLocalShot = await Local_Shot_Table.update(data, { where: {id} });
        return updateLocalShot;
    }

    async deleteLocalShot( id ) {
        const deleteLocalShot = await Local_Shot_Table.destroy({ where: {id} });
        return deleteLocalShot;
    }

}


export default new LocalShotService()