import { body } from "express-validator";

const OfferSchema = [
    body("start_date")
        .exists().withMessage("La fecha de inicio es requerida")
        .isDate().withMessage("Debe ser una fecha"),
    body("end_date")
        .exists().withMessage("La fecha de fin es requerida")
        .isDate().withMessage("Debe ser una fecha"),
    body("price")
        .exists().withMessage("El precio es requerido")
        .isFloat().withMessage("El precio debe ser un numero")
]

export default OfferSchema