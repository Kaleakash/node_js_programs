var a =10;
var b = 20;
try {
	if(b>a) {
		//throw new "Error Generated"
		//throw new EvalError();
		throw new SyntaxError("My Syntax Generated");
	}
}catch(err) {
	console.log("Custom Exception Generated "+err)
}