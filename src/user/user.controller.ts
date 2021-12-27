import Todo from './user.service'
import { Get, Route } from "tsoa";
import { Request, Response } from "express";

@Route('/user')
export default class UserController {
    async getUserHandler(req: Request, res: Response) {
        return res.status(200).send({
            message: "we done"
        })
    }
}