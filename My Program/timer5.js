var i=0;
function welcome() {
	if(i<=5){
	console.log("Welcome to Node JS "+i);
	}	
	i++;
}
var id1 = setTimeout(welcome,1000);
var id2 = setInterval(welcome,1000);
if(i>=5){
clearInterval(id2);
}