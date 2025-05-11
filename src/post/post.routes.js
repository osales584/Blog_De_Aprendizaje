import { Router } from "express";
import { getPosts, createPost } from "./post.controller.js";
import { createPostValidator} from "../middlewares/post-validators.js";
const router = Router();

router.post("/createPost", createPostValidator,createPost);

// Obtener todos los posts (con opción a filtrar por curso y ordenar)
router.get("/", getPosts);

export default router;