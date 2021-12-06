var obj = require("readline");
var rl = obj.createInterface({
	input:process.stdin,
	output:process.stdout
});
rl.question("Enter your name",(name)=> {
	console.log("your name is" +name);
	fname = name;
	rl.close();
})
