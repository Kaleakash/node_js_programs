var express = require("express");
var app = express();
var morgan = require("morgan");
app.use(morgan("tiny"));
app.get("/",function(req,res){
	res.send("Welcome to My Application")
})
app.listen(9999,()=>console.log("Server running on port number 9999"))