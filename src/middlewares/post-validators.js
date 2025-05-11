import { body} from "express-validator";
import { postTitleExists } from "../helpers/db-validators.js";
import { validarCampos } from "./validate-fields.js";
import { deleteFileOnError } from "./delete-file-on-error.js";
import { handleErrors } from "./handle-errors.js";

export const createPostValidator = [
    body("title").notEmpty().withMessage("El título es requerido"), 
    body("description").notEmpty().withMessage("La descripción es requerido"), 
    body("title").custom(postTitleExists), 
    validarCampos,
    deleteFileOnError,
    handleErrors
];
