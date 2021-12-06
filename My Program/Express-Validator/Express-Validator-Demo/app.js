var express = require("express");
var bodyParser = require("body-parser");
var expressValidator = require("express-validator");

app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//app.use(expressValidator); 
//app.use(express.methodOverride());

app.set("view engine","pug");

//Get
app.get('/', function(req,res){
    res.render('login', { 
        title: 'Form Validation Example',
        message: '',
        errors: {}        
    });            
});

//Post
app.post('/', function(req,res){
    req.assert('name', 'Name is required').notEmpty();           //Validate name
    req.assert('email', 'A valid email is required').isEmail();  //Validate email

    var errors = req.validationErrors();  
    if( !errors){   //No errors were found.  Passed Validation!
        res.render('login', { 
            title: 'Form Validation Example',
                message: 'Passed Validation!',
                errors: {}
        });
       
    }
    else {   //Display errors to user
        res.render('login', { 
            title: 'Form Validation Example',
            message: '',
            errors: errors
        });
    }
 });

app.listen(9999,()=>console.log("Server is running on port number 9999"));
