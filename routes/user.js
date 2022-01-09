const express= require("express")
const router= express.Router()   
//Router is a function of express
const {signup,signin}=require("../controllers/user")
const {userSignupValidator}= require("../validator")



router.post('/signup', userSignupValidator,signup)
router.post('/signin',signin)
//import sayHi method from Controller
// anything comes to the forward slash we gave 
// to this sayHi method 


module.exports= router;

