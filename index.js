const express = require('express')
const route = require('./src/routes/user.route')

const app = express()

// routes: http method, name, callback function
// http crud: get - gets, post - creates, put - update, patch - updates partially, delete - deletes
app.use(route)

app.listen(3000)