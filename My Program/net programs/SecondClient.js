var net = require("net"); 
var client_socket = net.connect({port:8888});
client_socket.on("connect", function() {
console.log("connected to server!");
	/*
	setTimeout(function(){
	client_socket.end(function(){
	console.log("disconnected from server!");
	});
	},3000);
	*/
});