import { Router } from 'express';
import DrinkController from '../controllers/Drink.controller.js';
import drinkSchema from '../schemas/Drink.schema.js';
import validateSchema from '../middleware/validationSchema.js';


const router = Router();


const {
    getAllDrinks,
    getDrinkById,
    createDrink,
    updateDrink,
    deleteDrink
} = DrinkController;


router.get('/', getAllDrinks);
router.get('/:id', getDrinkById);
router.post('/', drinkSchema, validateSchema, createDrink);
router.put('/:id', updateDrink);
router.delete('/:id', deleteDrink);


export default router