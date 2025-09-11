const {prisma} = require('../utils/dbConnector');
exports.getAllUsers = async(req,res) =>{
    try{
        const Data = await prisma.user.findMany({
            where:{role:'user'},
            select:{id:true,name:true,email:true,createdAt:true}
        });
        res.status(200).send({status:true,data:Data});
    }catch(err){
         
         res.status(400).send({status:false,message:err});
    }

}