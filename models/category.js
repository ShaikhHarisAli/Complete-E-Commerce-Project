const mongoose= require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        // any space in the beginning and end will be trimed out
        required: true,
        maxlength:32

    }
},{timeStamp:true})


module.exports=mongoose.model("Category",categorySchema)
// we can use this mongoose.model method to create new model we call it user with capital U
// this will be based on userSchema
// we can us ethis model anywhere later in our controller