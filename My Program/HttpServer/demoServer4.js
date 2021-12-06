var http = require("http");
var url = require("url");
var server = http.createServer();
server.on("request",function(req,res){
	var query = url.parse(req.url,true).query;
	console.log(query.name+" "+query.age);
	res.end();
})
server.listen(8888);
console.log("Server is running on port number as 8888")