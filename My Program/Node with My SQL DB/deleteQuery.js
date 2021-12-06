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
var res =con.query("delete from employee where id=?",[101],function(err,result){
	if(err){
		console.log(err.message)
	}else {
		if(result.affectedRows>0){
                console.log("Record deleted successfully!");
        }else {
                console.log("Record is not present");
        }
	}
});

con.end();