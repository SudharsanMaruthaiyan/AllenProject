const express = require('express')
const cors = require('cors')
const env = require('dotenv/config')
const userRoute = require('./routes/userRoutes')
const connectDB = require('./config/mongodb')

// app config
const app = express()
const port = process.env.PORT || 4000
connectDB()

// middleware 
app.use(express.json())
app.use(cors())


// api end point 
app.use('/api/user', userRoute )


// end point 
app.get('/', (req, res) =>{

    res.send("hello aas dd")

} )

// port 
app.listen(port, ()=>console.log("server started", port))

