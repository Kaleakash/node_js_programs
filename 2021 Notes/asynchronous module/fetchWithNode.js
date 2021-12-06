var fetch = require("node-fetch")
function loadData() {
fetch("https://jsonplaceholder.typicode.com/todos").then(response=>response.json()).
then(data=>console.log(data)).
catch(error=>console.log(error))
}
//loadData();

async function loadJsonInfo() {
    try{
    let response = await fetch("https://jsplaceholder.typicode.com/todos");
    let result = await response.json();
    console.log(result);
    }catch(Err){
        console.log(Err)
    }
}
loadJsonInfo();