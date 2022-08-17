import { check } from "express-validator";
import { validateResult } from "../middlewares/validate.js";

const validateCreate = [
    check("name").not().isEmpty()
    .withMessage("El nombre es requerido")
    .custom((value) => {
         if (value.length > 50) {
              throw new Error("El nombre no puede tener mas de 50 caracteres");
         }
         return true;
     })
        .custom((value) => {
            if (value.length < 3) {
                throw new Error("El nombre debe tener al menos 3 caracteres");
            }
            return true;
        }
    ),
    check("phone").not().isEmpty()
    .withMessage("El telefono es requerido")
    .custom((value) => {
            if (value.length > 50) {
                throw new Error("El telefono no puede tener mas de 50 caracteres");
            }
            return true;
        })
        .custom((value) => {
            if (value.length < 8) {
                throw new Error("El telefono debe tener al menos 8 caracteres");
            }
            return true;
        }
    ),
    check("email").not().isEmpty()
    .withMessage("El email es requerido")
    .custom((value) => {
            if (value.length > 50) {
                throw new Error("El email no puede tener mas de 50 caracteres");
            }
            return true;
        }
    ),
    check("address").not().isEmpty()
    .withMessage("La dirección es requerida")
    .custom((value) => {
            if (value.length > 50) {
                throw new Error("La dirección no puede tener mas de 50 caracteres");
            }
            return true;
        }
    ),

    check("status").not().isEmpty()
    .withMessage("El estado es requerido"),

    check("contact").not().isEmpty()
    .withMessage("El contacto es requerido"),

    check("item").not().isEmpty() 
    .withMessage("El item es requerido") 

    


];

export default validateCreate;


       
