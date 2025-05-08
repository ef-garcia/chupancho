import { body } from "express-validator";

const localSchema = [
    body("name")
        .exists().withMessage("El nombre es requerido")
        .isString().withMessage("El nombre debe ser un string")
        .isLength({ min: 3 }).withMessage("El nombre debe tener al menos 3 caracteres"), 
]

export default localSchema