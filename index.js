const app=require("express")()

app.get("/",(req,res)=>{
    res.send("hello world")
    console.log("hello world")
})

   
app.listen(8000,()=>{
    console.log("listening on 8000")
})


