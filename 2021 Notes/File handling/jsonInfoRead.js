var fs = require("fs");

 fs.readFile("empInfo.json",function(err,data){
     if(!err){
         console.log(data.toString());
         var empInfo = data.toString();
         var empJson = JSON.parse(empInfo);
         console.log("id is "+empJson.id)
         console.log("name is "+empJson.name)
         console.log("salary is "+empJson.salary)
     }
 });
