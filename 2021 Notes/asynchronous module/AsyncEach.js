var async = require("async");
var task_arr = [{name:'task_1', delay:1000},
            {name:'task_2', delay:3000},
                {name:'task_3', delay:2000},];
async.each(task_arr,(task,callback)=> {
    console.log("Task name is "+task.name)
    setTimeout(()=> {
        console.log("Task timeout is "+task.delay)
        
    },task.delay)
})