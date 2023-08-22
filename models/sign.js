const mongoose=require("mongoose");
const nodemailer=require("nodemailer");
const SignSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:[true,"Please Provide unique email"],
        unique: true,
    },
    phone:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    confirmPassword:{
        type:String,
        required:true,
    },
    url:{
        type:String,
        required:true,
    }
})
// SignSchema.post("save", async (doc)=>{
//     const initialRandom =Math.random();
//     const OTP=Math.floor(initialRandom*8000)+1000;
//     try{
//         console.log("inside doc 🤔",doc);

//         let transporter=nodemailer.createTransport({
//             host:process.env.MAIL_HOST,
//             auth:{
//                 user:process.env.MAIL_USER,
//                 pass:process.env.MAIL_PASS,
//             },
//         });

//         let info= await transporter.sendMail({
//             from:`singhCorporation- by akash`,
//             to:doc.email,
//             subject:'sending your image',
//             html:`<h2>hello ${doc.name}</h2> <p>Please chech your image ${doc.url}, please verify your email ID using this OTP
//             ${OTP}</p>`
//         })

//         console.log("information about info 😶",info);
//     }
//     catch(err){
//         console.log(err);
//     }
// })


const File=mongoose.model("sign-user-data",SignSchema);
module.exports=File; 