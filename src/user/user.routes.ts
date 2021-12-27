import express from 'express'
import UserController from './user.controller'
const userRouter = express.Router()


const userCtrl = new UserController()

userRouter
    .route('/')
    .get((req, res) => {
        res.send('glow-user')
    })
    .patch((req, res) => {
        res.send('patch-user')
    })

userRouter
    .route('/:id')
    .get((req, res) => {
        res.send('glow-user-id')
    })
    .patch((req, res) => {
        res.send('patch-user-id')
    })

export default userRouter