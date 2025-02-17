const express = require('express')
const router = express.Router()
const { allTodo, deleteTodo , createTodo , toggleCompleted , updateTodo } = require('../Controllers/TodoControllers')
const  authMiddleware = require('../middleware/auth.middleware')

router.get('/allTodo' ,authMiddleware, allTodo)
router.post('/createTodo' , authMiddleware , createTodo)
router.post('/deleteTodo/:id' ,authMiddleware, deleteTodo)
router.put('/updateTodo/:id' ,authMiddleware, updateTodo)
router.put('/toggleCompleted/:id' ,authMiddleware, toggleCompleted)


module.exports = router 