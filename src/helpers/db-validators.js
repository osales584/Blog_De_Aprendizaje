import Post from '../post/post.model.js';

export const postTitleExists = async (title = "") => {
    const existe = await Post.findOne({ title });
    if (existe) {
        throw new Error(`La publicación con el título '${title}' ya existe`);
    }
};

export const commentBelongsToPost = async (uid = "") => {
    const post = await Post.findById(uid);
    if (!post) {
        throw new Error(`La publicación con el ID '${uid}' no existe`);
    }
};
