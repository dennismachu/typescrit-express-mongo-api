import express from "express";
import { Get, Route } from "tsoa";
import todoRouter from "./todo/todo.routes";
import userRouter from "./user/user.routes"

const router = express.Router();



router.get("/", async (_req, res) => {
    //  const controller = new PingController();
    //   const response = await controller.getMessage();
    //   return res.send(response);
    res.status(200).json({
        success: true,
        message: 'Welcome to TS - Node.js Rest API Boiler Plate',
        author: 'Dennis Machu',
        github: 'https://github.com/dennismachu',
        linkedin: 'https://linkedin.com/in/dennismachu',
    })
});

router.use('/todo', todoRouter)
router.use('/user', userRouter)





export default router;