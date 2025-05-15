import { Router } from 'express';
import UserController from '../controllers/User.controller.js';
import userSchema from '../schemas/User.schema.js';
import  validateSchema  from '../middleware/validationSchema.js'

const router = Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = UserController;


router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', userSchema, validateSchema, createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);


export default router