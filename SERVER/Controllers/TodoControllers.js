const todoModel = require('../Models/Todo.model')

const allTodo = async(req , res)=>{
    try {
        const {task , description , isCompleted} = req.body
        const todo = await todoModel.find()
        res.status(200).json({
            message : "Todo Fetched Successfully",
            todo : todo 
        })
    } catch (error) {
        return res.status(500).json({
            message : "Something Went Wrong ",
            error : error 
        })
    }
}

const createTodo = async(req , res)=>{
    try {
        const {task , description } = req.body
        
        const existedTodo = await todoModel.findOne({task , description})
        if(existedTodo){
            return res.status(400).json({
                message : "Same Task & Description Already Exist"
            })
        }
        
        
        const todo = await todoModel.create({task , description})
        res.status(200).json({
            message : "Todo Created Successfully",
            todo : todo 
        })
    } catch (error) {
        return res.status(500).json({
            message : "Something Went Wrong ",
            error : error 
        })
    }
}

const deleteTodo = async(req , res)=>{
    try {
        const { id } = req.params;

        const todo = await todoModel.findByIdAndDelete(id)
        if(!todo){
            return res.status(404).json({
                message : "Todo Does Not Exist"
            })
        }
        res.status(200).json({
            message : 'Todo Deleted Successfully',
            todo : todo 
        })

    } catch (error) {
        return res.status(500).json({
            message : "Something Went Wrong ",
            error : error 
        })
    }
}

const toggleCompleted = async(req , res)=>{
    try {
        const { id } = req.params 
        const { isCompleted } = req.body 

        const todo = await todoModel.findByIdAndUpdate(id , { isCompleted } , {new : true , runValidators : true })
        if(!todo){
            return res.status(404).json({
                message : "Todo Does Not Exist"
            })
        }
        res.status(200).json({
            message : 'Todo Toggle Successfully',
            todo : todo 
        })

    } catch (error) {
        return res.status(500).json({
            message : "Something Went Wrong ",
            error : error 
        })
    }
}

const updateTodo = async(req , res)=>{
    try {
        const { id } = req.params 
        const { task , description } = req.body 

        const existedTodo = await todoModel.findOne({ task , description})
        if(existedTodo){
            return res.status(400).json({
                message : 'Same Task & Description Already Existed'
            })
        }

        const todo = await todoModel.findByIdAndUpdate(id , { task , description , isCompleted : false } , {new : true , runValidators : true })
        if(!todo){
            return res.status(404).json({
                message : "Todo Does Not Exist"
            })
        }
        res.status(200).json({
            message : 'Todo Update Successfully',
            todo : todo 
        })

    } catch (error) {
        return res.status(500).json({
            message : "Something Went Wrong ",
            error : error 
        })
    }
}

module.exports = {allTodo , createTodo , deleteTodo , updateTodo , toggleCompleted}