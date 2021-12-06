var net = require("net");
var server = net.createServer();
server.on("connection", function(server_socket) {
console.log("client connected");
server_socket.write("Hello client!");
server_socket.pipe(server_socket);
});
server.listen(8888,"localhost",2);
server.on("listening", function() {
console.log("server accepting connections");
});