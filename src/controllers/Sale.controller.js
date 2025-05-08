import SaleService from "../services/Sale.service.js";



class SaleController {

    constructor() {}

    async getAllSales(req, res) {
        try {
            const sales = await SaleService.getAllSales();

            if(!sales) {
                return res.status(404).send({
                    status: 404,
                    message: "No se ha encontrado las ventas."
                })
            }

            res.status(200).json({ sales });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getSaleById(req, res) {
        try {
            const { id }  = req.params;
            const sale = await SaleService.getSaleById( id );

            if(!sale) {
                return res.status(404).send({
                    status: 404,
                    message: "No se ha podido encontrar la venta."
                })
            }

            res.status(200).json({ sale });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createSale(req, res) {
        try {
            const data = req.body;
            const newSale = await SaleService.createSale( data );

            if(!newSale) {
                return res.status(404).send({
                    status: 404,
                    message: "No se ha podido crear la veta."
                })
            }

            res.status(200).json({ newSale });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateSale(req, res) {
        try {
            const { id } = req.params;
            const data = req.body;
            const updateSale = await SaleService.updateSale(id, data);

            if(!updateSale) {
                return res.status(404).send({
                    status: 404,
                    message: "No se ha podido actualizar la venta."
                })
            }

            res.status(200).json({ updateSale });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteSale(req, res) {
        try {
            const { id } = req.params;
            const deleteSale = await SaleService.deleteSale( id );

            if(!deleteSale) {
                return res.status(404).send({
                    status: 404,
                    message: "No se ha podido eliminar la venta."
                })
            }

            res.status(200).json({ deleteSale });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}


export default new SaleController()