var mongoClient = require("mongodb").MongoClient;
var url= "mongodb://localhost:27017/test";
mongoClient.connect(url,function(err,db){
	if(!err){
		db.collection("Emp").remove({_id:101},function(err,result){
			console.log("Record deleted "+result);
		});
	}
	db.close();
});