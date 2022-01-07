const express= require("express")
const router= express.Router()   
//Router is a function of express
const {signup}=require("../controllers/user")

router.post('/signup', signup)
//import sayHi method from Controller
// anything comes to the forward slash we gave 
// to this sayHi method 


module.exports= router;

