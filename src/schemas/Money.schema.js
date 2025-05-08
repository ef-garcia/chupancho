import { body } from "express-validator";

const moneySchema = [
    body("quantity")
        .exists().withMessage("La cantidad es requerida")
        .isFloat().withMessage("La cantidad debe ser un numero"), 
]

export default moneySchema