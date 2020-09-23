const Employee = require('../Modal/Employee')
const express = require('express')

const employeeRouter = express.Router()


employeeRouter.get('/get-all',async(req, res)=>{
   await Employee.find({})
   .then(data=>{
       console.log(data);
       res.send(data)
   })
   .catch(err=>{
       console.log(err);
   })
})

employeeRouter.post('/send-data', (req,res)=>{
    console.log(req.body.picture);
    const employee = new Employee({
        name:req.body.name,
        email:req.body.email,
        position:req.body.position,
        picture:req.body.picture,
        salary:req.body.salary,
        phone:req.body.phone
    })  

employee.save().then(data=>{
    console.log(data);
    res.send(data)
}).catch(err=>{
    console.log('failed');
})
    
})

employeeRouter.post("/delete",async(req,res)=>{
   await Employee.findByIdAndRemove(req.body._id)
    .then(data=>{
        console.log(data);
        res.send(data)
    }).catch(err=>{
        console.log(err);
    }) 
})

employeeRouter.post('/update', async(req, res)=>{

  await  Employee.findByIdAndUpdate(req.body._id,{
        name:req.body.name,
        email:req.body.email,
        position:req.body.position,
        picture:req.body.picture,
        salary:req.body.salary,
        phone:req.body.phone
    }).then(data=>{
        console.log(data);
        res.send(data)
    }).catch(err=>{
        console.log(err);
    })

})






module.exports = employeeRouter


