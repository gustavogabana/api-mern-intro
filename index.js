import express from 'express'
import route from './src/routes/user.route.js'
import connectDatabase from './src/database/db.js'

const app = express()
const port = 3000
connectDatabase()

// routes: http method, name, callback function
// http crud: get - gets, post - creates, put - update, patch - updates partially, delete - deletes
app.use(express.json())
app.use(route)

app.listen(port, () => console.log(`Server running at ${port}`))