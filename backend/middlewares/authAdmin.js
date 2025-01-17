const jwt = require('jsonwebtoken')

const authAdmin = async (req,res,next) =>{

    try {
        
        const {token} = req.headers
        if(!token){
            res.jso({success:false, message:"not authorized Login again"})
        }

        const token_decode = jwt.verify(token, process.env.JWT_SECRET)
        if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            res.jso({success:false, message:"not authorized Login again"})
        }

        next()
        
    } catch (error) {
        
    }

}

module.exports = authAdmin