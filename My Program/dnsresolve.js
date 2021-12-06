var dns = require("dns");
dns.resolve("www.facebook.com",function(err,address,family){
	console.log("Address "+address);
});