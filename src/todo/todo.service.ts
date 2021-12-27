import { Request, Response } from 'express'
import TodoModel from './todo.model'
import TodoInterface from './todo.interface';
export default class TodoService {
    async getPostServiceByID(id: string) {
        return id;
    }

    async createTodo(todoData: TodoInterface) {
        // Create an user object
        let todo = new TodoModel({
            title: todoData.title,
            description: todoData.description,
        })
        return await todo.save()
    }
}