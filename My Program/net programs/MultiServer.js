var net = require("net");
var server = net.createServer();
server.on("connection", function(server_socket) {
console.log("client connected");
server.getConnections(function(error, count){
console.log("%d clients connected", count);
server.close();
});
});
server.listen(8888,"localhost",2);
server.on("listening", function() {
console.log("server accepting connections");
server.maxConnections=2;
//console.log(‘only one connection will be served at a time.’);
});
server.on("close", function(){
console.log("server is closed and will not accept any more connections");
});