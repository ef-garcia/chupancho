import LocalModel from "../models/Local.model.js"



class LocalService {

    constructor() {}

    async getAllLocals() {
        const locals = await LocalModel.findAll();
        return locals;
    }

    async getLocalById( id ) {
        const local = await LocalModel.findByPk( id );
        return local;
    }

    async createLocal( data ) {
        const newLocal = await LocalModel.create( data );
        return newLocal;
    }

    async updateLocal(id, data) {
        const updateLocal = await LocalModel.update(data, { where: {id} } );
        return updateLocal;
    }

    async deleteLocal( id ) {
        const deleteLocal = await LocalModel.destroy( { where: {id} } );
        return deleteLocal;
    }

}

export default new LocalService()