var a = 10;
try {
	//a.toUpperCase();
	console.log("No Exception");
}catch(err) {
	console.log(err);
}finally {
	console.log("finally block executed");
}