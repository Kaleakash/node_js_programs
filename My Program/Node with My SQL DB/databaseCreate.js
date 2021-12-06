const mysql = require("mysql");

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root'
});

con.connect(function(err){
    if(err) throw ex;
    console.log("Database connected");
});

let db = "create database mydb4;";
con.query(db,function(err,result){
    if(err){
            console.log(err);
    }else{
    console.log("Database created ");
    }
});

con.end();