var obj = require("mongoose")
var uri ="mongodb://localhost:27017/test";
obj.Promise = global.Promise;
obj.connect(uri);
var db = obj.connection;
db.on("error",function(err){
	console.log("Error generated "+err)
})
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
	EmpRef.find({},function(err,result){
		if(err) {}
		else {
		console.log(result.length);
		result.forEach(rec=>{
	console.log("Id is "+rec._id+" Name is "+rec.name+" Salary is "+rec.salary)
		})
	}
	obj.disconnect();
	})	
});
