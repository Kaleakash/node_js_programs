const mysql = require("mysql");

const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"test"
})

con.connect(function(err){
        if(err) throw ex;
        console.log("Connected...")
})

con.end();