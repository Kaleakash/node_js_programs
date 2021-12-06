var mysql = require('mysql');
var con = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'root',
	database:'meanstack'
});
con.connect(function(err){
	if(err){
		console.log('Error genered'+err)
	}else {
		console.log('Connected successfully');
	}
})
//Static values 
/*var res =con.query("insert into employee values(9,'Amar',19000)",function(err,result){
	if(err){
		console.log(err.message)
	}else {
		console.log(result.affectedRows)
	}
});*/
//Storing the values  

var res =con.query("insert into employee values(?,?,?)",[102,'Rahul',160000],function(err,result){
	if(err){
		console.log(err.message)
	}else {
		console.log(result.affectedRows)
	}
});
console.log('Result '+res.count)
//Emp object passing 
let emp= {"_id":3,"name":"Ravi","salary":14000};
var res =con.query("insert into employee set ?",emp,function(err,result){
	if(err){
		console.log(err.message)
	}else {
		console.log(result.affectedRows)
	}
});
console.log('Result '+res.count)

con.end();