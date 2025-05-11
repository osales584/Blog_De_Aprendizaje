import { Schema, model } from "mongoose";

// Cursos predefinidos
const COURSE_ENUM = ['TALLER', 'PRACTICA SUPERVISADA', 'TECNOLOGIA'];

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "El título es obligatorio"],
      maxLength: [100, "El título no puede tener más de 100 caracteres"],
    },
    description: {
      type: String,
      required: [true, "La descripción es obligatoria"],
      maxLength: [1000, "La descripción no puede exceder los 1000 caracteres"],
    },
    course: {
      type: String,
      enum: {
        values: COURSE_ENUM,
        message: "El curso debe ser uno de: TALLER, PRACTICA SUPERVISADA, TECNOLOGIA",
      },
      required: [true, "El curso asociado es obligatorio"],
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

export default model('Post', postSchema);