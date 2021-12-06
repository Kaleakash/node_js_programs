var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mydb");
//mongoose.Promise = require('q').Promise;
//mongoose.Promise = global.Promise;
var Employee = new mongoose.Schema({EmpId:Number,Name:String,Salary:Number});
var Employee = mongoose.model("Employee",Employee);
var e1= new Employee({EmpId:101,Name:"Ram",Salary:12000});
e1.save(function(err){
	if(err) {
		console.log(err);
	}else {
		console.log(e1);	
	}
	mongoose.end();
});
