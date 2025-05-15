import { Router } from 'express';
import IngredientController from '../controllers/Ingredient.controller.js';
import ingredientSchema from '../schemas/Ingredient.schema.js';
import  validateSchema  from '../middleware/validationSchema.js';


const router = Router();


const {
    getAllIngredients,
    getIngredientById,
    createIngredient,
    updateIngredient,
    deleteIngredient
} = IngredientController;


router.get('/', getAllIngredients);
router.get('/:id', getIngredientById);
router.post('/', ingredientSchema, validateSchema, createIngredient);
router.put('/:id', updateIngredient);
router.delete('/:id', deleteIngredient);


export default router