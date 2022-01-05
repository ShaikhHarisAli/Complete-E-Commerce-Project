const express= require("express");  
const mongoose = require("mongoose")
//to call .env file we need to call dotenv package
require('dotenv').config()

//import routes
const userRoutes = require("./routes/user")



//set Database Connection
// connect takes 2 argument 1st is Database url and 2nd Argument is Configuration options
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
   // useCreateIndex: true
    //when mongoose finish connecting we get promise
}).then(()=>{console.log("DATABASE CONNECTED")} )

//app
const app= express();
//routes middlewear
app.use('/api',userRoutes)

const port = process.env.PORT || 8000
// in node js we have "PROCESS" just like in web browser we have Document object

//run the app
app.listen(port,()=> {
    console.log(`Server is running on port ${port}`)
})