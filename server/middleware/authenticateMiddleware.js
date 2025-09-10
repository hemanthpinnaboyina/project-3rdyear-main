const jwt = require('jsonwebtoken');
require('dotenv').config()
exports.verifyAdmin = (req,res,next)=>{
    // if(req.headers.token){
    //     const token = req.headers.token;
    //     try{
    //         const userData = jwt.verify(token,process.env.JWT_SECRET_TOKEN);
    //         if(userData.role !== 'admin'){
    //             return res.status(403).send({message:"Access denied",status:false});
    //         }
    //         req.user = userData;
    //     }catch(err){
    //         return res.status(401).send({message:"Invalid token",status:false});
    //     }
    // }else{
    //     return res.status(401).send({message:"No token provided",status:false});
    // }
    next()
}