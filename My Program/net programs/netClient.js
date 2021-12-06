var net = require("net");
var client_socket = net.connect({port:8787});
client_socket.on("connect",function() {
	console.log("Connected to server !");
});
client_socket.on("data",function(data){
	console.log(data.toString());
});