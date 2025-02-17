const jwt = require('jsonwebtoken')
const {hiddenKey} =  require('../secret/key')

const tokenv = (req,res,next)=>{

try {
    const token = req.headers.token;
if(!token){
    return res.status(400).json({message:'token error'})
}
let user = jwt.verify(token,hiddenKey)
req.user = user;
next();
} catch (error) {
    
    return res.status(400).json({message:error.message})
}
}

module.exports = {tokenv}