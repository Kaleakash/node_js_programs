var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/test";
mongoClient.connect(url,function(err,db){
	if(!err) {
		console.log("Db connection done successfully ");
	}
	db.close();
});