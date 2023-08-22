const express=require("express");
const router=express.Router();


const {signup}=require("../controllers/signup");
const {userapi}=require("../controllers/userapi");
const {login}=require("../controllers/login");
const {getotp}=require("../controllers/getotp");
const {updatepassword}=require("../controllers/updatepassword");
const {auth}=require("../Middleware/Auth");


router.post("/signup",signup);
router.get("/userapi",userapi);
router.post("/login", login);
router.post("/getotp",getotp);
router.post("/updatepassword",updatepassword);
router.post("/auth",auth);

module.exports=router;