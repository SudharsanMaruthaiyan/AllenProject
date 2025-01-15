const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const userModel = require('../modules/userModle');


// api for register 
const registerUser = async (req,res)=>{
    try {
        
        const {name , email, password} = req.body;
        if (!name || !password || !email) {
            return res.json({success:false , message:"Missing Details"})
        }  

        // validate email formate
        if (!validator.isEmail(email)) {
            return res.json({success:false , message:"Enter the Valid Email"})
        }

        // validating strong password 
        if(password.length < 8){
            return res.json({success:false, message:'Enter the Strong password'})
        }   

        // hashing password 
        const salt = await bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hash(password, salt)

        const userData = {
            name,
            email,
            password: hashedpassword
        }

        const newUser = new userModel(userData)
        const user = await newUser.save()

        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)

        res.json({success:true, token})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }
}


// api for user login 
const loginUser = async (req,res)=>{
    try {
        
        const {email, password} = req.body
        const user = await userModel.findOne({email})

        if(!user){
            return res.json({success:false, message:"user dones not exist"})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(isMatch){
            const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)
            res.json({success:true , token})
        }
        else{
            console.log("Invalid Credential");
            
        }

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }
}

// api for get user 
const getProfile = async(req,res)=>{
    try {
        
        const {userId} = req.body
        const userData = await userModel.findById(userId).select('-password')

        res.json({success:true, userData})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }
}


module.exports = {registerUser,loginUser,getProfile}