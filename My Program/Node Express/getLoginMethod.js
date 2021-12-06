const express = require("express");
const app = express();
const path = require("path");
app.get("/",(req,res)=>{
    console.log("Req receive...")
    res.sendFile(path.join(__dirname+"/Login.html"))
});
app.get("/checkInfo",(req,res)=>{
    let user = req.query["user"];
    let pass = req.query["pass"];
    if(user=="Akash" && pass=="Kale"){
            res.send("Successfully Login!");
    }else {
            res.send("Failure try once again!");
    }
})
const server = app.listen(8989,"localhost",()=>{
    let host = server.address().address;
    let port = server.address().port;
    console.log(`Server address is ${host} and port number is ${port}`);
});