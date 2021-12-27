import TodoService from './todo.service'
import TodoInterface from './todo.interface';
import { Get, Route } from "tsoa";
import { Request, Response } from "express";

//
const todoService = new TodoService()
@Route('/todo')
export default class TodoController {
    async creatTodoHandler(req: Request, res: Response) {
        const todoData: TodoInterface = req.body
        const { title, description } = todoData
        try {
            const response = await todoService.createTodo(todoData)
            return res.status(200).json({
                client_message: "todo saved",
                todo: response
            })
        } catch (error) {
            return res.json({
                server_message: "an error occurred",
                client_message: (error as Error).message,
                error: error
            })
        }
    }
}

// export async function createPostHandler(req: Request, res: Response) {
//     const userId = get(req, "user._id");
//     const body = req.body;

//     const post = await createPost({ ...body, user: userId });

//     return res.send(post);
// }

// export async function updatePostHandler(req: Request, res: Response) {
//     const userId = get(req, "user._id");
//     const postId = get(req, "params.postId");
//     const update = req.body;

//     const post = await findPost({ postId });

//     if (!post) {
//         return res.sendStatus(404);
//     }

//     if (String(post.user) !== userId) {
//         return res.sendStatus(401);
//     }

//     const updatedPost = await findAndUpdate({ postId }, update, { new: true });

//     return res.send(updatedPost);
// }
// export async function getPostHandler(req: Request, res: Response) {
//     const postId = get(req, "params.postId");
//     const post = await findPost({ postId });

//     if (!post) {
//         return res.sendStatus(404);
//     }

//     return res.send(post);
// }

// export async function deletePostHandler(req: Request, res: Response) {
//     const userId = get(req, "user._id");
//     const postId = get(req, "params.postId");

//     const post = await findPost({ postId });

//     if (!post) {
//         return res.sendStatus(404);
//     }

//     if (String(post.user) !== String(userId)) {
//         return res.sendStatus(401);
//     }

//     await deletePost({ postId });

//     return res.sendStatus(200);
// }