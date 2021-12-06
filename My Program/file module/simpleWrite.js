var fs = require("fs");
var simpleMsg = "Welcome again to Node JS File System to Write the file";
fs.write("demo1.txt",simpleMsg, function(err){
    if(!err){
       console.log("File stored the information");
    }
});