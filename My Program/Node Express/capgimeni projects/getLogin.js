var express = require("express");
var app =express();
var path = require("path")
app.get("/",function(req,res){
	    res.sendFile(path.join(__dirname+"/Login.html"))
})
app.get("/check",function(req,res){
	//res.write("Welcome")
	var name = req.query.user;
	var pass = req.query.pass
	if(name=="Raj" && pass=="123") {
		//res.write("Successfully Login")
		return res.redirect("/home")
	}else {
		res.write("Failure try once again")
	}
	//res.end();
})
app.listen(8888);
console.log("Running on port number as 8888 ");		