import { Router } from 'express';
import LocalController from '../controllers/Local.controller.js';
import localSchema from '../schemas/Local.schema.js';
import  validateSchema  from '../middleware/validationSchema.js';


const router = Router();


const {
    getAllLocals,
    getLocalById,
    createLocal,
    updateLocal,
    deleteLocal
} = LocalController;


router.get('/', getAllLocals);
router.get('/:id', getLocalById);
router.post('/', localSchema, validateSchema, createLocal);
router.put('/:id', updateLocal);
router.delete('/:id', deleteLocal);


export default router