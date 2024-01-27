import { Router } from 'express'
import login from '../controllers/auth.controller.js'
import middleware from '../middlewares/global.middleware.js'

const router = Router()

router.post('/', middleware.validEmail, login)

export default router