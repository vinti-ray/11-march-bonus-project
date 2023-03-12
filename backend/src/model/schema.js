const mongoose=require("mongoose")
const schema=new mongoose.Schema({
    title:{type:String},
    description:{type:String},
    status:{
        type:String,
        enum:["Open", "In-Progress", "Completed"]
    }

},{timestamps:true})
module.exports=mongoose.model("task",schema)