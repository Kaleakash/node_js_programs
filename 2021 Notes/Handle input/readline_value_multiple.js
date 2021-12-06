var obj = require("readline");
var rl = obj.createInterface({
	input:process.stdin,
	output:process.stdout
});
rl.question("Enter your id",(id)=> {
	rl.question("Enter the name",(name)=> {
		console.log("Your id is "+id);
		console.log("Your name is "+name);
		rl.close();
	});	
});
