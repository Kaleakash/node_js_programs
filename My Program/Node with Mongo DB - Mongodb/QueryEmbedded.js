var mongoClient = require("mongodb").MongoClient;
var assert = require("assert");
var objectId = require("mongodb").ObjectId;
var url= "mongodb://localhost:27017/mydb";
var retrieveQuery = function(db,callback){
	
	var cursor = db.collection("Trainer").find({"SId.SName":"Seeta"});
	cursor.each(function(err,doc){
		assert.equal(err,null);
		if(doc!=null) {
		console.log(doc);
		}else {
		callback();
		}
	});
};

mongoClient.connect(url,function(err,db){
	assert.equal(null,err);
		retrieveQuery(db,function(){
			db.close();
		});
});