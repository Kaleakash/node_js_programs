var fs = require("fs");

fs.readFile("demo.txt",(err,data)=>{
    if(!err){
        console.log(data.toString())
    }else {
        console.log(err.message);
    }
})