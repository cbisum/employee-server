const express = require('express')
const bodyPraser = require('body-parser')
const mongoose = require('mongoose')
const employeeRouter = require('./Routes/createEmployee')
const {mongoUri} = require('./utils')

const app = express();
app.use(bodyPraser.json());
app.use('/api', employeeRouter)

mongoose.connect(mongoUri, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on("connected",()=>{
    console.log("connected to database");
})

mongoose.connection.on("error",(err)=>{
    console.log("errr", err);
})



app.get('/',(req,res)=>{
    res.send("Welcome to ReactNative app")
})


app.listen(3000, ()=>{
    console.log("server running ");
})




