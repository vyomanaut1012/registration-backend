const user=require("../models/sign");
const bcrypt=require("bcrypt");

exports.updatepassword=async(req,res)=>{
    const {email, NewPassword}=req.body;

    
    let hashedcode;
       try{
         hashedcode=await bcrypt.hash(NewPassword,10);
       }catch(err){
         console.log(err);
         return res.status(500).json({
             success:false,
             message:"error in hashing password",
         })
       }
       console.log(email);
       console.log(NewPassword);
      await user.updateOne({"email":email},{
        $set:{
            password:hashedcode,
            confirmPassword:hashedcode
        }});
}