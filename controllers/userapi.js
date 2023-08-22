const user=require("../models/sign");
exports.userapi=async (req,res)=>{
    try{
        const data=await user.find();
        res.send(data);
    }catch(err){
        console.log(err);
    }
    
}