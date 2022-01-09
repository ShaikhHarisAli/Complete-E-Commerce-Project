const mongoose= require("mongoose");
const crypto = require("crypto");
const uuidv1 = require("uuidv1");
const { timeStamp } = require("console");
const { urlToHttpOptions } = require("url");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        // any space in the beginning and end will be trimed out
        required: true,
        maxlength:32

    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique:32

    },
    hash_password: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        trim: true,

    },
    salt: String,
    role:{
        //one will be admin & one will be user
        type: Number,
        default:0
        //0 will be for user and 1 wil be for admin
    },
    history:{
        // user purchases items from our online shop then those purchases will be stored
        type:Array,
        default:[]   
    }
},{timeStamp:true})

// virtual field
// virtual will be password
// sending from client side
userSchema.virtual('password')
//in set we will take the password that is coming from client
.set(function(password) {
    this._password=password
    this.salt=uuidv1()
    //salt will be use to hash the password
    this.hash_password= this.encryptPassword(password)
    // this value is based on what we got from client side that will be encrypted before saved as password

}
)
.get( function(){
    return this._password
})

// we need to create this method (encryptPassword) add to the user schema
// this is the way you can add methids to user schema
userSchema.methods={
    authenticate: function(plainText){
        return this.encryptPassword(plainText) === this.hash_password;
    },




    encryptPassword:function(password){
        if(!password) return '';
        try{
            return crypto.createHmac('sha1',this.salt)
                            .update(password)
                            .digest('hex')
            
            // salt which is a long complicated unique string 
            //crypto whch is core node js module we can use it to hash the password
            //createHmac is one of the method of hashing the password
        }catch(err){
            return "";
        }
    }
}
module.exports=mongoose.model("User",userSchema)
// we can use this mongoose.model method to create new model we call it user with capital U
// this will be based on userSchema
// we can us ethis model anywhere later in our controller