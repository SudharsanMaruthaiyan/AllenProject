const express = require('express')
const { registerUser, loginUser, getProfile } = require('../controller/userControler')
const authUser = require('../middlewares/authUser')
const upload = require('../config/multer')



const userRoute = express.Router()

userRoute.post('/register', upload, registerUser )
userRoute.post('/login', loginUser)
userRoute.get('/get-profile', authUser, getProfile)

module.exports = userRoute