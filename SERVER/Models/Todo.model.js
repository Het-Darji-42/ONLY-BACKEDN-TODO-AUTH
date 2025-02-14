const mongoose = require('mongoose');
const todoSchema = mongoose.Schema({
    
    task: {
        type : String , 
        required : true ,
        min: 3,
        max : 25
    },
    description: {
        type : String , 
        required : true ,
        min : 3 ,
        max : 250
    },
    isCompleted: {
        type : Boolean , 
        default : false
    } ,
    
    //for userModel 
    // user:{
    //     type : mongoose.Schema.Types.ObjectId,
    //     ref : "User", 
    //     required : true
    // }

},{timestamps:true})

const todoModel = mongoose.model('Todo' , todoSchema)
module.exports = todoModel 