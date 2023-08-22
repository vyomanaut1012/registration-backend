require("dotenv").config();
const nodemailer=require("nodemailer");
exports.getotp=async (req,res)=>{
    const initialRandom =Math.random();
    const OTP=Math.floor(initialRandom*8000)+1000;
    console.log("OTP",OTP);
    console.log("user",process.env.MAIL_USER);
    console.log("pass",process.env.MAIL_PASS);
    const {email}=req.body;
    res.json({
        otp:OTP,
    })

    
    console.log(`baby please find email`,email);
    try{
        // console.log("inside doc 🤔",doc);
        let transporter=nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS,
            },
        });

        var mailOptions={
            from:`singhofficial101201@gmail.com`,
            to : email,
            subject: `sending email`,
            html :`<p>please enter your otp ${OTP}. Do not share with anyone</p>`
        }

        transporter.sendMail(mailOptions,function(error,info){
            if(error) console.log(error);
            else console.log("email send"+info.response)
        });

        // console.log("information about info 😶",info);
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            message: "An error occurred",
        });
    }
}
