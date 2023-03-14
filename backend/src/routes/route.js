const express=require("express")
const router=express.Router()
const {createTask,getTask,updateTask}=require("../controller/controller")

router.post("/createtask",createTask)
router.get("/gettask",getTask)
router.put("/update",updateTask)


module.exports=router