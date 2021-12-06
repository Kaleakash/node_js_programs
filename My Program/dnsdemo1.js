var dns = require("dns");
dns.lookup("www.google.com",function(err,address,family){
	console.log(err);
	console.log(address);
	console.log(family);
});