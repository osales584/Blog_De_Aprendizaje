import { Router } from "express";
import { getCommentsByPost, createComment } from "./comment.controller.js";
import { createCommentValidator, getCommentsByPostValidator } from "../middlewares/comment-validators.js";

const router = Router();

router.post("/createComment", createCommentValidator, createComment);
router.get("/findComment/:uid", getCommentsByPostValidator, getCommentsByPost);

export default router;