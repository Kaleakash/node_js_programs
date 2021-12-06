var mongoClient = require("mongodb").MongoClient;
var url= "mongodb://localhost:27017/test";
mongoClient.connect(url,function(err,db){
	if(!err) {
		var cursor = db.collection("Emp").find();
		cursor.each(function(err,doc){
			if(doc!=null){
			//console.log(doc);
			console.log("Id is "+doc._id+" Name is "+doc.Name+" Salary is "+doc.Salary);
			} 
		});
	}
	db.close();
});