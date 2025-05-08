import { body } from "express-validator";

const LotSchema = [
    body("quantity")
        .exists().withMessage("La cantidad es requerida")
        .isNumeric().withMessage("La cantidad debe ser un numero"),
    body("expiration_date")
        .exists().withMessage("La fehca de vencimiento es requerida")
        .isDate().withMessage("La fecha de vencimiento debe ser una fecha"),
]

export default LotSchema