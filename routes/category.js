const express= require("express")
const router= express.Router()   
//Router is a function of express

const {create}=require("../controllers/category");
const {requireSignin,isAuth,isAdmin}=require("../controllers/auth");
const {
    userById
}=require("../controllers/user"); 


//create temporary route
router.post('/category/create/:userId',requireSignin,isAuth,isAdmin,create);

router.param('userId',userById);


module.exports= router;

 