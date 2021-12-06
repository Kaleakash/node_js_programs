var crypto = require("crypto");  

//Below code to convert encrypted data

var cipher = crypto.createCipher("aes192", "a password");  
var encrypted = cipher.update("Hello, Akash Here!", "utf8", "hex");  
encrypted += cipher.final("hex");  
console.log(encrypted);   
console.log("Data Encrypted Successfully");
console.log();

//Below code to convert decrypted data 

var decipher = crypto.createDecipher("aes192", "a password");  
var encrypted_data = encrypted;  
//var encrypted_data = "abc123"; 
var decrypted = decipher.update(encrypted_data, "hex", "utf8");  
decrypted += decipher.final('utf8');  
console.log(decrypted);  
console.log("Data Decrypted Successfully");
