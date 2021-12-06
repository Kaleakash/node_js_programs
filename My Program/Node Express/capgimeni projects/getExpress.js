var express = require("express");
var app =express();
app.get("/",function(req,res){
	res.end("Welcome to Express module");
})
app.listen(8888);
console.log("Running on port number as 8888 ");		