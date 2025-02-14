const userModel= require('../Models/User.model')
const bcrypt = require('bcrypt')

const registerUser = async(req , res)=>{
    
    try {
        const { userName , email , password } = req.body
        const existedUser = await userModel.findOne({userName})
        if(existedUser){
            return res.status(400).json({
                message : 'User Already Existed'
            })
        }
    
        const hashedPassword = await bcrypt.hash(password, 10 )
        const createUser = await userModel.create({userName, email , password : hashedPassword })
        res.status(200).json({
            message : "User Created Successfully" ,
            user : createUser
        })
        
    } catch (error) {
        return res.status(500).json({
            message : "Something Went Wrong",
            error : error
        })
        
    }
}

const logIn = async (req,res) => { 
    try {
        const {userName , password} = req.body

        const user = await userModel.findOne({userName})
        if(!user){
            return res.status(400).json({
                message : "Invalid Credential : here userName"
            })
        }

        const isMatch = await bcrypt.compare(password , user.password)
        if(!isMatch){
            return res.status(400).json({
                message : 'invalid Credential : here pass'
            })
        }

        res.status(200).json({
            message : 'Login Successfully', 
            user : user
        })
        

    } catch (error) {
        return res.status(500).json({
            message : "Something Went Wrong",
            error : error
        })
    }
}

module.exports = {registerUser, logIn}