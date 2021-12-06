var obj = require("mongoose")
var uri ="mongodb://localhost:27017/test";
obj.Promise = global.Promise;
obj.connect(uri);
var db = obj.connection;
db.on("error",function(err){	console.log("Error generated "+err)})

db.once("open",function() {
	console.log("Connected...")
	//Define the schema 
	var EmpSchema = obj.Schema({
	_id:Number,
	name:String,
	salary:Number
	})
	//compile the schema to model 
	var EmpRef = obj.model("Emp",EmpSchema,"EmpInfo");
	EmpRef.updateOne({_id:5},{$set:{salary:45000}},function(err,result){
		if(err) {
			console.log(err.errmsg);
		}else {
			console.log(result.nModified);
		}
	obj.disconnect();	
	});
});


