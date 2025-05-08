import LotModel from "../models/Lot.model.js";


class LotService {

    constructor() {}

    async getAllLots() {
        const lots = await LotModel.findAll();
        return lots;
    }

    async getLotById( id ) {
        const lot = await LotModel.findByPk( id );
        return lot;
    }

    async createLot( data ) {
        const newLot = await LotModel.create( data );
        return newLot;
    }

    async updateLot(id, data) {
        const updateLot = await LotModel.update(data, {where: {id} });
        return updateLot;
    }

    async deleteLot( id ) {
        const deleteLot = await LotModel.destroy({ where: {id} });
        return deleteLot;
    }

}


export default new LotService()