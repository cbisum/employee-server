const mongoose = require('mongoose')



const employeeSchema = new mongoose.Schema({
    name:String,
    email:String,
    position:String,
    salary:String,
    picture:String,
    phone:String
})

const Employee = mongoose.model("employee", employeeSchema)


module.exports = Employee