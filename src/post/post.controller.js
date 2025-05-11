import Post from "./post.model.js";

// Obtener todos los posts (con filtros y orden dinámico)
export const getPosts = async (req, res) => {
    try {
        const { course, sortBy = "createdAt", order = "desc", title } = req.query;

        const filter = {};
        if (course) {
            filter.course = course;
        }
        if (title) {
            filter.title = { $regex: new RegExp(title, "i") };
        } 

        const posts = await Post.find(filter)
            .populate('course', 'name')
            .sort({ [sortBy]: order === "asc" ? 1 : -1 });   

        return res.status(200).json({
            success: true,
            total: posts.length,
            posts
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error al obtener las publicaciones",
            error: err.message
        });
    }
};

// Crear nuevo post
export const createPost = async (req, res) => {
    try {
        const { title, description, course } = req.body;

        const newPost = new Post({
            title,
            description,
            course
        });

        await newPost.save();

        return res.status(201).json({
            success: true,
            message: "Publicación creada exitosamente",
            post: newPost
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error al crear la publicación",
            error: err.message
        });
    }
};

