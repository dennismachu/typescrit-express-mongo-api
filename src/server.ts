import express, { Application, Next, Request, Response } from 'express'
import Router from "./routes.index";
import morgan from 'morgan'
import cors from 'cors'
import swaggerUi from "swagger-ui-express";

// Routes
import TodoRoute from "./todo/todo.routes";

const app: Application = express()
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.raw())
app.use(express.text())
app.use(morgan('dev'))
app.use(cors())
// app.use(mongoSanitize()) //Use for security to prevent NoSql injections
// app.use(helmet()) //Adds extra headers to protect the routes
// app.use(xss()) //To prevent a harmful script being sent with the POST request
// app.use(hpp()) //To prevent HTTP Parameter Pollution.
app.use('/api/v1', Router)
app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
        swaggerOptions: {
            url: "/swagger.json",
        },
    })
);
app.use(Router);




export default app