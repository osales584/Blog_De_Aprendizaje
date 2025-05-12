import { Schema, model } from "mongoose";

const commentSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "El nombre del usuario es obligatorio"],
      maxLength: [50, "El nombre no puede exceder los 50 caracteres"],
    },
    content: {
      type: String,
      required: [true, "El contenido del comentario es obligatorio"],
      maxLength: [250, "El comentario no puede exceder los 250 caracteres"],
    },
    post: {
      type: Schema.ObjectId,
      ref: "Post",
      required: [true, "El comentario debe estar asociado a una publicación"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  }
);

export default model("Comment", commentSchema);