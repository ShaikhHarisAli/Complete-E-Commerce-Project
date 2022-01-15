const mongoose= require("mongoose");
const {ObjectId}=mongoose.Schema


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        // any space in the beginning and end will be trimed out
        required: true,
        maxlength:32

    },
    description: {
        type: String,
        required: true,
        maxlength:2000

    },
    price: {
        type: Number,
        trim: true,
        required: true,
        maxlength:32

    },
    category: {
        type: ObjectId,
        ref:'Category',
        required: true,

    },
    quantity: {
        type: Number,

    },
    photo: [{
        data: Buffer,
        contentType:String

    }],
    shipping: {
        required:false,
        type:Boolean

    }

    
},{timeStamp:true})


module.exports=mongoose.model("Product",productSchema)
// we can use this mongoose.model method to create new model we call it user with capital U
// this will be based on userSchema
// we can us ethis model anywhere later in our controller