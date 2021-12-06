var dns = require("dns");
dns.reverse("31.13.78.35", function(err, hostnames) {
console.log(hostnames);
});