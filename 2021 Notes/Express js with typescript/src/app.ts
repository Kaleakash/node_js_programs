import express,{Request,Response} from 'express'
let app = express();


app.get("/",(req:Request,res:Response)=> {
    res.send("Simple express module created...")
})

app.post("/post",(req:Request,res:Response)=> {
        console.log("Post method")
        res.send("Post method")
})

app.put("/put",(req:Request,res:Response)=> {
    console.log("put method")
    res.send("put method")
})
app.delete("/delete",(req:Request,res:Response)=> {
    console.log("delete method")
    res.send("delete method")
})

app.listen(9090,()=>console.log("Server is running on port number"))