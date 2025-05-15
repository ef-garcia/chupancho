import { Router } from 'express';
import OfferController from '../controllers/Offer.controller.js';
import offerSchema from '../schemas/Offer.schema.js';
import  validateSchema  from '../middleware/validationSchema.js';


const router = Router();


const {
    getAllOffers,
    getOfferById,
    createOffer,
    updateOffer,
    deleteOffer
} = OfferController;


router.get('/', getAllOffers);
router.get('/:id', getOfferById);
router.post('/', offerSchema, validateSchema, createOffer);
router.put('/:id', updateOffer);
router.delete('/:id', deleteOffer);


export default router