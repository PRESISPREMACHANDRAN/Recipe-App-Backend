const express=require("express")
const cors=require("cors")
const bodyParser=require("body-parser")

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

// add recipe details
app.post("/add",(req,res)=>{
    var data=req.body
res.json({"status":"success","data":data})
})

// view all recipe details
app.post("/viewAll",(req,res)=>{
    var data=req.body
res.json({"status":"success","data":data})
})


app.listen(4000,()=>{
    console.log("server starts running....")}
)