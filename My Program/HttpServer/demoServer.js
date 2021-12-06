var http = require("http");
var server = http.createServer(function(req,res){
	res.end("Welcome to Web Application");
});
server.listen(8888);
console.log("Server is running on port number is 8888");