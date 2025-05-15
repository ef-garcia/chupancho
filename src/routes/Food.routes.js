import { Router } from 'express';
import FoodController from '../controllers/Food.controller.js';
import foodSchema from '../schemas/Food.schema.js';
import  validateSchema  from '../middleware/validationSchema.js';


const router = Router();


const {
    getAllFoods,
    getFoodById,
    createFood,
    updateFood,
    deleteFood
} = FoodController;


router.get('/', getAllFoods);
router.get('/:id', getFoodById);
router.post('/', foodSchema, validateSchema, createFood);
router.put('/:id', updateFood);
router.delete('/:id', deleteFood);


export default router