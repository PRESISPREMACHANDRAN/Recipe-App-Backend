const mongoose=require("mongoose")

const recipeSchema=mongoose.Schema(
    {
        recipeName:String,
        ingredients:String,
        cookingTime:String,
        instructions:String,
        cuisineType:String,
        mealType:String,
        nutritionalInformation:String,
        recipeImage:String
    }
)

var recipeModel=mongoose.model("recipe",recipeSchema)

module.exports={recipeModel}