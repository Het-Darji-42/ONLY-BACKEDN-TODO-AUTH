const express = require('express')
const app = express()
const AuthRoutes = require('./Routes/AuthRouter')
const TodoRoutes = require('./Routes/TodoRouter')

const cors = require('cors')

app.use(express.json())
app.use(cors())

app.use('/api/auth'  , AuthRoutes)
app.use('/api/todo' , TodoRoutes)


// app.use('/', AuthRoutes) 


module.exports = app