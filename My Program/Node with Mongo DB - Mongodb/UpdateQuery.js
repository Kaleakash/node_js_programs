var mongoClient = require("mongodb").MongoClient;
var url= "mongodb://localhost:27017/test";
mongoClient.connect(url,function(err,db){
	if(!err){
		db.collection("Emp").update({_id:101},{$set:{salary:40000}},function(err,result){
			console.log("Record updated "+result);
		});
	}
	db.close();
});