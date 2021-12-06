var obj = require("mongoose")
var uri ="mongodb://localhost:27017/test";
obj.Promise = global.Promise;
obj.connect(uri);
var db = obj.connection;
db.once("open",function() {
	console.log("Connected...")
	//Define the schema 
	var EmpSchema = obj.Schema({
	_id:Number,	name:String,	salary:Number
	})
	//compile the schema to model 
	var EmpRef = obj.model(Emp,EmpSchema,"EmpInfo");
	//creating the document instance
	var emp1 = new Emp({_id:8,name:"Ravi",salary:12000});
	EmpRef.deleteOne({_id:2},function(err,result){
		if(err) {
			console.log(err.errmsg);
		}else {
			if(result.deletedCount>0) {
			console.log("Record deleted successfully");
			}else {
			console.log("Record is not present");
			}
		}
	obj.disconnect();	
	});
});
