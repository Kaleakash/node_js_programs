var http = require("http");
var urlRef = require("url");
var server = http.createServer(function(req,res){
	res.write(req.url);
	var abc = urlRef.parse(req.url,true)
	res.write(abc);
	res.end();
	
});
server.listen(8888);
console.log("Server is running on port number is 8888");