var empInfo={emp:[{"id":100,"name":"Ravi","salary":12000},
	{"id":101,"name":"Raj","salary":14000},
	{"id":102,"name":"Raju","salary":16000}]}

var express = require("express")
var app = express();
app.get("/empInfo",function(req,res){
	res.json(empInfo)	
});
app.get("/emp/id",function(req,res){
	console.log(empInfo.emp[0]);
	res.json("Welcome")	
});
app.get("/empStore",function(req,res){
	var idValue = req.query.id
	var nameValue = req.query.name;
	var salaryValue = req.query.salary;
	var empData = {id:idValue,name:nameValue,salary:salaryValue}
	empInfo.emp.push(empData);
	res.json(empInfo);
})
app.listen(8888,()=>console.log("Running on port number as 8888"))
//8105129651
//6363511909