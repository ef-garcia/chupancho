import MoneyModel from "../models/Money.model.js";



class MoneyService {

    constructor() {}

    async getAllMoneys() {
        const moneys = await MoneyModel.findAll();
        return moneys;
    }

    async getMoneyById( id ) {
        const money = await MoneyModel.findByPk( id );
        return money;
    }

    async createMoney( data ) {
        const newMoney = await MoneyModel.create( data );
        return newMoney;
    }

    async updateMoney(id, data) {
        const updateMoney = await MoneyModel.update(data, { where: {id} });
        return updateMoney;
    }

    async deleteMoney( id ) {
        const deleteMoney = await MoneyModel.destroy({ where: {id} });
        return deleteMoney;
    }

}


export default new MoneyService()