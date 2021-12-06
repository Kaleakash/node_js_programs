/*function fun1() {
    return 100;
}
console.log(fun1())
console.log("Normal Statement")*/

/*async function fun2() {
    return 100;
}
console.log(fun2())
console.log("Normal Statement")*/

    // async function fun2() {
    //     return 100;
    // }
    // fun2().then(data=>console.log(data))

    // async function f() {
    //     return Promise.resolve(1);
    //   }
      
    //   f().then(data=>console.log(data)); // 1

    async function fun1() {
        let obj = new Promise((resolve,reject)=> {
            setInterval(resolve,2000,"hello I am promise - successfully done!")

        })
        let result = obj;
        console.log(result);
    }
    fun1();