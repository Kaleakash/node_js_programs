var http = require("http");

var server =http.createServer();

server.on("request",function(req,res){
	res.writeHead(200);
	console.log(req.url)
	console.log(req.method)
	console.log(req.headers)
	res.end("Hi");
})
server.listen(8888);