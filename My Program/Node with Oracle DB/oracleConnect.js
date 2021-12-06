const oracledb = require("oracledb");

const con = oracledb.createConnection({
    host:"localhost:1521/XE",
    user:"system",
    password:"Welcome123"
})

con.connect(function(err){
        if(err) throw ex;
        console.log("Connected...")
})

con.end();