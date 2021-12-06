var http = require("http");
http.createServer(function(req,res){
res.writeHead(200,{"Content-Type":"text/plain"});
res.end('Welcome to Node JS Http Server');
}).listen(8888);
console.log('Server running at http://localhost:8888/')