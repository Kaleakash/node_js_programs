/*
Notice the extra () after require(). The prompt-sync module is a function that creates prompting functions, 
so you need to call prompt-sync in order to get your actual prompting function. 
Once you’ve loaded the prompt-sync module and called it, using it to retrieve user input is relatively straightforward: 
signal interrupt by default false. that makes program not exit immediately when we use Cnt + C. 
If we 
*/
var prompt = require("prompt-sync")({sigint: false})
//var prompt = require("prompt-sync")()
var a = eval(prompt("Enter value of a "));
var b = eval(prompt("Enter value of b "));
var c = eval(prompt("Enter value of c "));
var d = eval(prompt("Enter value of d "));

var sum = a+b+c+d;
console.log("sum is "+sum);
 