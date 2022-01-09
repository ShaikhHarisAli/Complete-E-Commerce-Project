const express= require("express");  
const mongoose = require("mongoose");
const morgan = require('morgan');
const bodyParser= require('body-parser');
const cookieParser=require('cookie-parser');
const expressValidator = require('express-validator');
//to call .env file we need to call dotenv package
require('dotenv').config()

const app= express();
//import routes
const userRoutes = require("./routes/user")



//set Database Connection
// connect takes 2 argument 1st is Database url and 2nd Argument is Configuration options
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology: true 
    //useCreateIndex: true
    //when mongoose finish connecting we get promise
}).then(()=>{console.log("DATABASE CONNECTED")} )



//morgan use as middlewres
 app.use(morgan("dev"));
 app.use(bodyParser.json());
 app.use(cookieParser());
 app.use(expressValidator());
//app

 //routes middlewear
app.use('/api',userRoutes)

const port = process.env.PORT || 8080
// in node js we have "PROCESS" just like in web browser we have Document object

//run the app
app.listen(port,()=> {
    console.log(`Server is running on port ${port}`)
})