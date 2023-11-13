const express = require("express");
const dontenv = require("dotenv");
const mongoose = require("mongoose");
const userRoutes = require("./Routes/userRoutes")
const app = express();
dontenv.config();
var cors = require("cors");
app.use(cors())


// connecting datavbase
const connectDb =  async ()=>{
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log("server connected to database");
    }
    catch(err){
        console.log(err.message);
    }

}

connectDb();


const PORT  = process.env.PORT || 8080;
console.log(process.env.MONGO_URI);

app.use(express.json())

app.use("/user",userRoutes)


app.listen(PORT,()=>{
    console.log("Running app at " + PORT)
})

app.get('/',(req,res)=>{
    res.send("Welcome");
})