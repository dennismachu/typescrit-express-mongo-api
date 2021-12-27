import express from 'express'
import TodoController from './todo.controller'
const todoRouter = express.Router()


const todoCtrl = new TodoController()

todoRouter
    .route('/')
    .get(todoCtrl.creatTodoHandler)

export default todoRouter