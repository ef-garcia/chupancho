import { body } from "express-validator";

const shotSchema = [
    body("name")
        .exists().withMessage("El nombre es requerido")
        .isString().withMessage("El nombre debe ser un string")
        .isLength({ min: 3 }).withMessage("El nombre debe tener al menos 3 caracteres"),
    body("price")
        .exists().withMessage("El precio es requerido")
        .isFloat().withMessage("el preico debe ser un numero"),
    body("size")
        .exists().withMessage("El tamaño es requerido")
        .isString().withMessage("El tamaño debe ser un string")
        .isIn(["chico", "mediano", "grande"]).withMessage("Tamaño invalido")
]

export default shotSchema