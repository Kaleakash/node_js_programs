var mongoClient = require("mongodb").MongoClient;
var url= "mongodb://localhost:27017/test";
mongoClient.connect(url,function(err,db){
	if(!err) {
		db.collection("Emp").insert({_id:101,Name:"Ravi",Salary:16000},function(err,result){
			console.log("Record inserted "+result.insertedCount);
		});		
	}
	db.close();
});