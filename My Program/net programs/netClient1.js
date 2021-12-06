var net = require("net");
var client_socket = net.connect({port:8888});
client_socket.on("connect", function() {
console.log("connected to server!");
});
process.stdin.pipe(client_socket);
client_socket.on("data", function(data) {
console.log(data.toString());
});