var fs = require("fs");
var empData = '{"id":100,"name":"Raj","salary":120000}';
var empJson = JSON.parse(empData);
var empObj =JSON.stringify(empJson);
console.log("Id is "+empJson.id);
console.log("Name is "+empJson.name);
console.log("Salary is "+empJson.salary);
fs.writeFile("empInfo.json",empObj,function(err){
    if(!err){
        console.log("Stored information");
    }
})