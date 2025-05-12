import { Router } from "express";
import { getCommentsByPost, createComment } from "./comment.controller.js";
import { createCommentValidator, getCommentsByPostValidator } from "../middlewares/comment-validators.js";

const router = Router();
/**
 * @swagger
 * /createComment:
 *   post:
 *     summary: Crea un nuevo comentario asociado a una publicación.
 *     tags:
 *       - Comments
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - content
 *               - post
 *             properties:
 *               username:
 *                 type: string
 *                 description: Nombre del usuario que realiza el comentario.
 *                 example: "JuanPerez"
 *               content:
 *                 type: string
 *                 description: Contenido del comentario.
 *                 example: "Este es un comentario de prueba."
 *               post:
 *                 type: string
 *                 description: ID de la publicación asociada al comentario.
 *                 example: "645c1b2f4f1a2b3c4d5e6f7g"
 *     responses:
 *       201:
 *         description: Comentario creado con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Comentario creado con éxito"
 *                 comment:
 *                   $ref: '#/components/schemas/Comment'
 *       404:
 *         description: Publicación no encontrada.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Publicación no encontrada"
 *       500:
 *         description: Error al crear el comentario.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Error al crear el comentario"
 */
router.post("/createComment", createCommentValidator, createComment);
/**
 * @swagger
 * /findComment/{uid}:
 *   get:
 *     summary: Obtiene todos los comentarios asociados a una publicación.
 *     tags:
 *       - Comments
 *     parameters:
 *       - in: path
 *         name: uid
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la publicación cuyos comentarios se desean obtener.
 *         example: "645c1b2f4f1a2b3c4d5e6f7g"
 *     responses:
 *       200:
 *         description: Lista de comentarios obtenida con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 total:
 *                   type: integer
 *                   example: 3
 *                 comments:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Comment'
 *       500:
 *         description: Error al obtener los comentarios.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Error al obtener los comentarios"
 */
router.get("/findComment/:uid", getCommentsByPostValidator, getCommentsByPost);

export default router;