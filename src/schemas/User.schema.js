import { body } from "express-validator";

const userSchema = [
    body("name")
        .exists().withMessage("El nombre es requerido")
        .isString().withMessage("El nombre debe ser un string")
        .isLength({ min: 3 }).withMessage("El nombre debe tener al menos 3 caracteres"),
    body("lastname")
        .exists().withMessage("El apellido es requerido")
        .isString().withMessage("El apellido debe ser un string")
        .isLength({ min: 3 }).withMessage("El apellido debe tener al menos 3 caracteres"),
    body("password")
        .exists().withMessage("La contraseña es requerida")
        .isString().withMessage("La contraseña debe ser un string")
        .isLength({ min: 8 }).withMessage("La contraseña debe tener al menos 8 caracteres"),
    body("type")
        .exists().withMessage("El tipo es requerido")
        .isString().withMessage("El tipo debe ser un string")
        .isIn(["cajero", "cocinero", "admin"]).withMessage("Tipo invalido")
]

export default userSchema