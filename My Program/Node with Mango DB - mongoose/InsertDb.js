var obj = require("mongoose")
var uri ="mongodb://localhost:27017/test";
obj.Promise = global.Promise;
obj.connect(uri);
var db = obj.connection;
db.on("error",function(err){console.log("Error generated "+err)})
db.once("open",function() {
	console.log("Connected...")
	//Define the schema 
	var EmpSchema = obj.Schema({
	_id:Number,
	name:String,
	salary:Number
	})
	//compile the schema to model 
	var Emp = obj.model("Emp",EmpSchema,"EmpInfo");
	//creating the document instance
	var emp1 = new Emp({_id:9,name:"Ravi",salary:12000});
	emp1.save(function(err,result){
		if(err) {
			console.log(err.errmsg);
		}else {
			console.log(result);
		}
	obj.disconnect();	
	});
});

