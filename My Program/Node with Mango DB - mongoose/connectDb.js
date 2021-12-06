var obj = require("mongoose")
var uri ="mongodb://localhost:27017/test";
obj.connect(uri);
var db = obj.connection;
db.on("error",function(err){
	console.log("Error generated "+err)
})
db.once("open",function() {
	console.log("Connected...")
})
db.close();