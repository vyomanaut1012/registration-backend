const user=require("../models/sign");
require("dotenv").config();
const jwt=require("jsonwebtoken");

exports.auth=async(req,res,next)=>{
    const token=req.body.token;
    // console.log("Auth",token);
    if(!token || token==undefined){
        return res.json({
            message:"NoToken"
        })
    }
        const payload=jwt.verify(token,process.env.JWT_SECRET);
        console.log(payload); 
         return res.json({
            message:"YesToken"
        })
          next();
}

