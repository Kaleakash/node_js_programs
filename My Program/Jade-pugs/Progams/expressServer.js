var express  = require("express");
var app = express();
var router = express.Router();
var path = require("path");
app.set("view engine","pug");

app.get("/",function(req,res){
    res.render("index")
})

router.get("/check",function(req,res){
        var user = req.query.user;
        var pass = req.query.pass;
        if(user=="Ajay"&& pass=="123"){
                //path.join(__dirname+"/success")
                res.render("success")
        }else {
                //path.join(__dirname+"/failure")
                res.render("failure")
        }

})
app.listen(9999,console.log("Server running on port number 9999"))