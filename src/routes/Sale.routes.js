import { Router } from 'express';
import SaleController from '../controllers/Sale.controller.js';
import saleSchema from '../schemas/Sale.schema.js';
import validateSchema from '../middleware/validationSchema.js';


const router = Router();

const {
    getAllSales,
    getSaleById,
    createSale,
    updateSale,
    deleteSale
} = SaleController;


router.get('/', getAllSales);
router.get('/:id', getSaleById);
router.post('/', saleSchema, validateSchema, createSale);
router.put('/:id', updateSale);
router.delete('/:id', deleteSale);


export default router