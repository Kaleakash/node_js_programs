var express = require("express");
var bodyParser = require("body-parser")
var cors = require("cors");
var app = express();

//It is use to enable the bodyParser plugin which help to receive the 
//Json Data. 
app.use(cors());		//add middle ware 
	
var empInfo=[{"id":100,"name":"Raj","salary":12000}]

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
extended:true
}))			// bodyParser.urlencoded returns middleware that only parses urlencoded bodies and only looks at requests where the 
			// content-type header matches the type options. 	
app.use(abc);       //User-Defined middle ware application     

// All employee details 
app.get("/empDetails",function(req,res){		// the resource 
	res.json(empInfo);
})

// Get specific employee details 
app.get("/empById/:id",function(req,res) {
    let empId = req.params.id;
    let result = empInfo.find(e=>e.id==empId);
    if(result == undefined){
        res.send("Record with not available with id as "+empId);
    }else {
        res.send(result);    
    }
})

//Store Employee records 
app.post("/storeEmployees",function(req,res){	//create the resource 
    console.log("Post methods")
    console.log(req.body);
    empInfo.push(req.body);
res.send("Stored Successfully.....")
    //res.json(empInfo);
});

app.put("/updateSalary",function(req,res){		//update the records 
    console.log("Put methods")
    var id = req.body.id
    var salary = req.body.salary;
    var result = empInfo.find(e=>{
            if(e.id==id){
                e.salary=salary;
                return e;
            }
    })
   if(result==undefined){
       res.send("Record didn't update successfully")
   }else {
        res.end("Record updated successfully...")
   }
});


app.delete("/deleteInfo/:id",function(req,res){
    let id = req.params.id
    let flag=0;
    empInfo.find((e,i)=>{
        if(e.id==id){
            empInfo.splice(i,1);
            flag++;
        }
    });  
    if(flag>0){
        res.send("Successfully deleted")
    } else {
        res.send("Record not present")
    }
    
});

//Simple Middleware functions 

function abc(req,res,next){
    console.log("Before Request");
    next();
}


app.listen(9999,()=>console.log("Server running on port number 9999"));
