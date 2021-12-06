var crypto = require("crypto");  
var secret = "abcdefg";  
var hash = crypto.createHmac("sha256", secret)  
                   .update("Welcome to JavaTpoint")  
                   .digest("hex");  
console.log(hash);  