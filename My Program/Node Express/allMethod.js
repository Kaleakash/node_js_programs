const express = require("express");
const app = express();
const port = 3000;

app.all("/",(req,res)=>
{
    console.log("Any method called....");
    res.send("All Method "+req.method)
});
app.listen(port,()=>console.log(`Server is running on port number ${port}`));