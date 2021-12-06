var recursive = function(){
	console.log("Hey, This is call after 1 seconds")
	setTimeout(recursive,1000)
}
recursive();
 