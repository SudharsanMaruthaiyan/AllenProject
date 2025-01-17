const express = require('express')
const cors = require('cors')
const env = require('dotenv/config')
const userRoute = require('./routes/userRoutes')
const connectDB = require('./config/mongodb')
const path = require('path');
const adminRoute = require('./routes/adminRoutes')

// Serve static files (images) from the "uploads" folder
// app config
const app = express()
const port = process.env.PORT || 4000
connectDB()


// middleware 
app.use(express.json())
app.use(cors())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// api end point 
app.use('/api/user', userRoute )
app.use('/api/admin', adminRoute)


// end point 
app.get('/', (req, res) =>{

    res.send("hello aas dd")

} )

// port 
app.listen(port, ()=>console.log("server started", port))

