const express= require("express")
const router= express.Router()   
//Router is a function of express
const {signup,signin,signout,requireSignin}=require("../controllers/auth")
const {userSignupValidator}= require("../validator")



router.post('/signup', userSignupValidator,signup)
router.post('/signin',signin)
router.get('/signout',signout)

//create temporary route
router.get('/hello',requireSignin,(req,res)=>{
    res.send("hello there");
})


//import sayHi method from Controller
// anything comes to the forward slash we gave 
// to this sayHi method 


module.exports= router;

