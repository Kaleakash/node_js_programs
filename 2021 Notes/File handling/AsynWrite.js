var fs = require('fs');
var msg="Welcome to Node JS Program using Nodeasfasfas"
fs.writeFile("demo3.txt",msg,{flag:'a+'},(err)=> {
	if(!err) {
		console.log("File stored");
	}else {
		console.log(err);
	}
});