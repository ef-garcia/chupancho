import { Router } from 'express';
import DrinkTasteController from '../controllers/DrinkTaste.controoler.js';
import drinkTasteSchema from '../schemas/DrinkTaste.schema.js';
import  validateSchema  from '../middleware/validationSchema.js';


const router = Router();


const {
    getAllDrinkTastes,
    getDrinkTasteById,
    createDrinkTaste,
    updateDrinkTaste,
    deleteDrinkTaste
} = DrinkTasteController;


router.get('/', getAllDrinkTastes);
router.get('/:id', getDrinkTasteById);
router.post('/', drinkTasteSchema, validateSchema, createDrinkTaste);
router.put('/:id', updateDrinkTaste);
router.delete('/:id', deleteDrinkTaste);


export default router