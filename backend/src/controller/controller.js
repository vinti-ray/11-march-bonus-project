const taskModel = require("../model/schema");

const createTask = async (req, res) => {
  try {
    let data = req.body;
    const createData = await taskModel.create(data);
    return res.status(201).send({ status: true, message: createData });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};



const getTask=async(req,res)=>{
try {

  const findData=await taskModel.find()
  return res.status(200).send({ status: true, message: findData });
  
} catch (error) {
  return res.status(500).send({ status: false, message: error.message });
}
}

const updateTask = async (req, res) => {
  try {
    let data = req.body;
    console.log(data);
    const updatedata = await taskModel.findOneAndUpdate({description:data.description}, data, {
      new: true,
    });
    return res.status(200).send({ status: true, message: updatedata });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};
module.exports = { createTask , updateTask,getTask};
