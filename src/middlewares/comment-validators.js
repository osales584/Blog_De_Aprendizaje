import { body, param } from "express-validator";
import { commentBelongsToPost} from "../helpers/db-validators.js";
import { validarCampos } from "./validate-fields.js";
import { deleteFileOnError } from "./delete-file-on-error.js";
import { handleErrors } from "./handle-errors.js";

export const createCommentValidator = [
    body("username").notEmpty().withMessage("El nombre de usuario es requerido"),
    body("content").notEmpty().withMessage("El contenido es requerido"),
    body("post").notEmpty().withMessage("El ID de la publicación es requerido"),
    body("post").custom(commentBelongsToPost),  
    validarCampos,
    deleteFileOnError,
    handleErrors
];

export const getCommentsByPostValidator = [
    param("uid").notEmpty().withMessage("El ID de la publicación es requerido"),
    validarCampos,
    handleErrors
];