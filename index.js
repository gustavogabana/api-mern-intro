import express from 'express'
import route from './src/routes/user.route.js'
import authRoute from './src/routes/auth.route.js'
import connectDatabase from './src/database/db.js'
import dotenv from 'dotenv'

const app = express()
const port = process.env.PORT || 3000
dotenv.config()
connectDatabase()

// routes: http method, name, callback function
// http crud: get - gets, post - creates, put - update, patch - updates partially, delete - deletes
app.use(express.json())
app.use(route)
app.use(authRoute)

app.listen(port, () => console.log(`Server running at ${port}`))