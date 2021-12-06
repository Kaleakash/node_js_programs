var http = require("http");
var url = require("url");
var server = http.createServer(function(req,res){
	res.write(req.url)
	var pathInfo = url.parse(req.url)
	console.log(pathInfo)
	res.write(pathInfo.pathname)
	if(pathInfo.pathname=="/") {
		res.write("Welcome to Home Page");
	}	
	if(pathInfo.pathname=="/Hi") {
		res.write("Welcome to Hi Page");
	}
	if(pathInfo.pathname=="/Hello") {
		res.write("Welcome to Hello Page");
	}
	res.end();
})
server.listen(8888);
console.log("Server is running on port number as 8888");