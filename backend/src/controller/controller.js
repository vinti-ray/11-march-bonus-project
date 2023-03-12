const taskModel = require("../model/schema");

const createTask = async (req, res) => {
  try {
    let data = req.body;
    const createData = await taskModel.create(data);
    return res.status(201).send({ status: false, message: data });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    let data = req.body;
    let id = req.params.id;
    const updatedata = await taskModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    return res.status(200).send({ status: false, message: updatedata });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};
module.exports = { createTask , updateTask};
