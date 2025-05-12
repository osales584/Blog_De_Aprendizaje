import { version } from "mongoose";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerOptions = {
    swaggerDefinition:{
        openapi:"3.0.0",
        info:{
            title: "API Blog de Aprendizaje",
            version:"1.0.0",
            description: "API para registro de organizado de los trabajos y proyectos de aprendizaje, accesible para cualquier visitante",
            contact:{
                name: "Oliver Sales",
                email: "osales-2020584@kinal.edu.gt"
            }
        },
        servers:[
            {
                url: "http://127.0.0.1:3000/learningBlog/v1"
            }
        ]
    },
    apis:[
        "./src/comment/*.js",
        "./src/post/*.js",
        "./src/comment/comment.routes.js",
        "./src/post/post.routes.js",
    ]
}

const swaggerDocs = swaggerJSDoc(swaggerOptions)

export { swaggerDocs, swaggerUi}