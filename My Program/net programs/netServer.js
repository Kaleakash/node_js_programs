var net = require("net");
var server = net.createServer();
server.listen(8787,"localhost",2);
server.on("listening",function() {
	console.log("server accepting connections");
});
server.on("connection",function(server_socket){
	console.log("client connected");
	server_socket.write("Message from server");
});
