import { Router } from 'express';
import ShotController from '../controllers/Shot.controller.js';
import shotSchema from '../schemas/Shot.schema.js';
import  validateSchema  from '../middleware/validationSchema';


const router = Router();


const {
    getAllShots,
    getShotsById,
    createShot,
    updateShot,
    deleteShot
} = ShotController;


router.get('/', getAllShots);
router.get('/:id', getShotsById);
router.post('/', shotSchema, validateSchema, createShot);
router.put('/:id', updateShot);
router.delete('/:id', deleteShot);


export default router