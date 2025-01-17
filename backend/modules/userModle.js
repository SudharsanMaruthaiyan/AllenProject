const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{type: String, required: true},
    email:{type:String , required: true, unique:true},
    password:{type: String, required: true},
    image:{data:Buffer, contentType:String}
})

const userModel = mongoose.model.user || mongoose.model('user', userSchema)
module.exports = userModel