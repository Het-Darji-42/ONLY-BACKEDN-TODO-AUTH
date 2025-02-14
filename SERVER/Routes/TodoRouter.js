const express = require('express')
const router = express.Router()
const { allTodo, deleteTodo , createTodo , toggleCompleted , updateTodo } = require('../Controllers/TodoControllers')


router.get('/allTodo' , allTodo)
router.post('/createTodo' , createTodo)
router.post('/deleteTodo/:id' , deleteTodo)
router.put('/updateTodo/:id' , updateTodo)
router.put('/toggleCompleted/:id' , toggleCompleted)


module.exports = router 