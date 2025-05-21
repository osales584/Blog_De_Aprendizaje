import Comment from "./comment.model.js";
import Post from "../post/post.model.js";

export const createComment = async (req, res) => {
    try {
        const { content, post, username } = req.body; 

        const foundPost = await Post.findById(post); 
        
        if (!foundPost) {
            return res.status(404).json({
                success: false,
                message: "Publicación no encontrada",
            });
        }

        const newComment = new Comment({
            username,
            content,
            post: post,  
        });

        await newComment.save();

        return res.status(201).json({
            success: true,
            message: "Comentario creado con éxito",
            comment: newComment,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al crear el comentario",
            error: error.message,
        });
    }
};

export const getCommentsByPost = async (req, res) => {
    try {
        const { uid } = req.params;

        const comments = await Comment.find({ post: uid })
            .populate("post", { title: 1, _id: 0 })
            .sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            total: comments.length,
            comments,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al obtener los comentarios",
            error: error.message,
        });
    }
};