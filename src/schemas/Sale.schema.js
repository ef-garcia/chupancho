import { body } from "express-validator";

const saleSchema = [
    body("summary")
        .exists().withMessage("El resumen es requerido")
        .isFloat().withMessage("El resumen es un numero"),
    body("date")
        .exists().withMessage("La fecha es requerida")
        .isDate().withMessage("Debe ser una fecha"),
    body("paymenth_method")
        .exists().withMessage("El metodo de pago es requerido")
        .isString().withMessage("El metodo de pago debe ser un string")
        .isIn(["efectivo", "mercado-pago"]).withMessage("Metodo de pago invalido")
]

export default saleSchema