import { body } from "express-validator";

const drinkSchema = [
    body("brand")
        .exists().withMessage("La marca es requerida")
        .isString().withMessage("La marca debe ser un string")
        .isLength({ min: 3 }).withMessage("La marca debe tener al menos 3 caracteres"),
    body("type")
        .exists().withMessage("El tipo es requerido")
        .isString().withMessage("El tipo debe ser un string")
        .isIn(["gaseosa", "alcohol", "agua"]).withMessage("Tipo invalido"),
    body("capacity")
        .exists().withMessage("La capacidad es requerida")
        .isFloat().withMessage("La capacidad debe ser un numero"),
    body("quantity")
        .exists().withMessage("La cantidad es requerida")
        .isNumeric().withMessage("La cantidad debe ser un numero"),
    body("price")
        .exists().withMessage("El precio es requerido")
        .isFloat().withMessage("La precio debe ser un numero"),
]

export default drinkSchema