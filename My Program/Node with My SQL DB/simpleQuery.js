var mysql = require('mysql');
var con = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'root',
	database:'test'
});
con.connect(function(err){
	if(err){
		console.log('Error genered'+err)
	}else {
		console.log('Connected successfully');
	}
})
var res =con.query("insert into employee values(9,'Amar',19000)",function(err,result){
	if(err){
		console.log(err.message)
	}else {
		console.log(result.affectedRows)
	}
});
console.log('Result '+res.count)
con.end();