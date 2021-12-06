/*var obj = new Promise((resolve,reject)=> {
    setTimeout(resolve,1000,2)
})
obj.then(data=>data).
then(data=>data).
then(data=>console.log("third then"+data)).
catch(error=>console.log(error))*/

var obj1 = new Promise((resolve,reject)=> {
    setTimeout(resolve,2000,"First Promise")
})

var obj2 = new Promise((resolve,reject)=> {
    setTimeout(resolve,5000,"Second Promise")
})
obj1.then(x=> {
    return obj2;
}).then(data=>console.log(data)).catch(error=>console.log(error));