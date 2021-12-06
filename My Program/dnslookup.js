var dns = require("dns");
dns.lookup("www.facebook.com",function(err,address,family){
	console.log("Address "+address);
	console.log("Family"+family);
});