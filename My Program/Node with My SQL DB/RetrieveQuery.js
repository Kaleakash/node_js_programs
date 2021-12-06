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
});
var sql="select * from employee"
con.query(sql, function(error, results) {
  if (error) {
    return console.error(error.message);
  }
	console.log(results);
	
		results.forEach(element => {
					console.log("Id is "+element.id+" Name is "+element.name+" Salary is "+element.salary);
		});
});
 
con.end(); 