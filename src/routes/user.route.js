import { Router } from 'express'
import userController from '../controllers/user.controller.js'
import middleware from '../middlewares/global.middleware.js'

const router = Router()
router.post('/user', userController.create)
router.get('/user', userController.findAll)
router.get('/user/:id', middleware.validId, middleware.validUser, userController.findById)
router.patch('/user/:id', middleware.validId, middleware.validUser, userController.update)

export default router