const express = require("express");
const app = express();
const port = 3000;

app.get('/ab?cd', function (req, res) {
    res.send('ab?cd')
  })
  
app.listen(port,()=>console.log(`Server is running on port number ${port}`));