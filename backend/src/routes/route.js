const express=require("express")
const router=express.Router()
const {createTask}=require("../controller/controller")

router.post("/createtask",createTask)



module.exports=router