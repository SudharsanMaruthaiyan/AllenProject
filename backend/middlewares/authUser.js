const jwt = require('jsonwebtoken')

const authUser = async (req, res, next)=>{
    try {
        
        const {token} = req.headers
        if(!token){
            res.json({success:false, message:"not authorized Login again"})
        }
        const token_decode = jwt.verify(token, process.env.JWT_SECRET)
        req.body.userId = token_decode.id
        next()

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }

}

module.exports = authUser