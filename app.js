const express=require("express")
const cors=require("cors")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const { recipeModel } = require("./Model/RecipeModel")

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

mongoose.connect("mongodb+srv://presi123:presi123@cluster0.dfo33ti.mongodb.net/RecipeDB?retryWrites=true&w=majority");

// add recipe details
app.post("/add",async(req,res)=>{
    var data=req.body
    let recipe=new recipeModel(data)
    let result=await recipe.save()
res.json({"status":"success","data":result})
})

// view all recipe details
app.post("/viewAll",async(req,res)=>{
    let result=await recipeModel.find()
res.json({"status":"success","data":result})
})

// Delete recipe details
app.post("/delete",(req,res)=>{
    var data=req.body
res.json({"status":"success","data":data})
})


//search recipe details
app.post("/search",(req,res)=>{
    var data=req.body
res.json({"status":"success","data":data})
})


app.listen(4000,()=>{
    console.log("server starts running....")}
)