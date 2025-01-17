const express = require('express')
const { loginAdmin } = require('../controller/adminController')

const adminRoute =  express.Router()

adminRoute.post('/login', loginAdmin)


module.exports = adminRoute
