var fs = require("fs");
var msg = "Welcome Again Again ";
fs.appendFile("demo2.txt",msg,function(err){
    if(!err){
        console.log("File stored the information")
    }
})