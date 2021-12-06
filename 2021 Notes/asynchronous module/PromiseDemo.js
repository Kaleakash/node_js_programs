var obj = new Promise((resolve,reject)=> {
    resolve("done successfully")
})

obj.then(data=>console.log(data)).catch(error=>console.log(error))