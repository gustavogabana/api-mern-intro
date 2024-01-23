const route = require('express').Router()
const hello = require('../controllers/user.controller')

route.get('/', hello)

module.exports = route