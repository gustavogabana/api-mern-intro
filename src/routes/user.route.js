import { Router } from 'express'
import userController from '../controllers/user.controller.js'
import middleware from '../middlewares/global.middleware.js'

const router = Router()
router.post('/', userController.create)
router.get('/', userController.findAll)
router.get('/:id', middleware.validId, middleware.validUser, userController.findById)
router.patch('/:id', middleware.validId, middleware.validUser, userController.update)

export default router