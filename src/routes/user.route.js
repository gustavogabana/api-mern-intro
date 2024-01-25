const route = require('express').Router()
const userController = require('../controllers/user.controller')

route.post('/user', userController.create)
route.get('/user', userController.findAll)
route.get('/user/:id', userController.findById)
route.patch('/user/:id', userController.update)

module.exports = route