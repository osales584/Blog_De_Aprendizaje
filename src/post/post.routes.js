import { Router } from "express";
import { getPosts, createPost } from "./post.controller.js";
import { createPostValidator} from "../middlewares/post-validators.js";
const router = Router();

/**
 * @swagger
 * /createPost:
 *   post:
 *     summary: Crea una nueva publicación asociada a un curso.
 *     tags:
 *       - Posts
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - course
 *             properties:
 *               title:
 *                 type: string
 *                 description: Título de la publicación.
 *                 example: "Introducción a Node.js"
 *               description:
 *                 type: string
 *                 description: Descripción detallada de la publicación.
 *                 example: "Este taller cubre los fundamentos de Node.js y su ecosistema."
 *               course:
 *                 type: string
 *                 description: Curso asociado a la publicación. Debe ser uno de: TALLER, PRACTICA SUPERVISADA, TECNOLOGIA.
 *                 example: "TALLER"
 *     responses:
 *       201:
 *         description: Publicación creada exitosamente.
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
 *                   example: "Publicación creada exitosamente"
 *                 post:
 *                   $ref: '#/components/schemas/Post'
 *       500:
 *         description: Error al crear la publicación.
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
 *                   example: "Error al crear la publicación"
 */
router.post("/createPost", createPostValidator,createPost);

// Obtener todos los posts (con opción a filtrar por curso y ordenar)
/**
 * @swagger
 * /:
 *   get:
 *     summary: Obtiene todas las publicaciones con opciones de filtro y orden.
 *     tags:
 *       - Posts
 *     parameters:
 *       - in: query
 *         name: course
 *         schema:
 *           type: string
 *         description: Filtra las publicaciones por curso (TALLER, PRACTICA SUPERVISADA, TECNOLOGIA).
 *         example: "TALLER"
 *       - in: query
 *         name: title
 *         schema:
 *           type: string
 *         description: Filtra las publicaciones por título (búsqueda parcial).
 *         example: "Node.js"
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: Campo por el cual ordenar las publicaciones (por defecto: createdAt).
 *         example: "title"
 *       - in: query
 *         name: order
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *         description: Orden de los resultados (ascendente o descendente, por defecto: desc).
 *         example: "asc"
 *     responses:
 *       200:
 *         description: Lista de publicaciones obtenida exitosamente.
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
 *                   example: 5
 *                 posts:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Post'
 *       500:
 *         description: Error al obtener las publicaciones.
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
 *                   example: "Error al obtener las publicaciones"
 */
router.get("/", getPosts);

export default router;