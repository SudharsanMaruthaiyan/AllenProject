const express = require('express')
const { registerUser, loginUser, getProfile } = require('../controller/userControler')
const authUser = require('../middlewares/authUser')



const userRoute = express.Router()

userRoute.post('/register', registerUser )
userRoute.post('/login', loginUser)
userRoute.get('/get-profile', authUser, getProfile)

module.exports = userRoute