const route = require('express').Router()
const userController = require('../controllers/user.controller')
const {validId, validUser} = require('../middlewares/global.middlewares')

route.post('/user', userController.create)
route.get('/user', userController.findAll)
route.get('/user/:id', validId, validUser, userController.findById)
route.patch('/user/:id', validId, validUser, userController.update)

module.exports = route