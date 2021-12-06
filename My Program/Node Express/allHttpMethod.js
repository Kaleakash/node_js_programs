const express = require("express");
const app = express();
const port = 3000;

app.get("/",(req,res)=>
{
    console.log("Get method called....");
    res.send("Get method called..")
});
app.post("/",(req,res)=>{
    console.log("post method called....");
    res.send("post method called..")
});
app.put("/",(req,res)=>{
    console.log("Put method called....");
    res.send("Put method called..")
});
app.delete("/",(req,res)=>{
    console.log("Delete method called....");
    res.send("Delete method called..")
});
app.listen(port,()=>console.log(`Server is running on port number ${port}`));