//prompt
var obj = require("prompt");
obj.start();
obj.get(["id","name","salary"],(err,result)=> {
	if(!err) {
		console.log("your name is "+result.name);
		console.log("your id is "+result.id);
		console.log("your salary is "+result.salary);
	}
})
