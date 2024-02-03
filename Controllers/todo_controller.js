const todoModel = require("../Models/todo_model");
exports.addTodo = async (req, res, next) => {
  let title = req.body.title;
  let desc = req.body.desc;
  let result = await todoModel.addTodo(title, desc);
  if (result.id != null) {
    let data = {
      status: "Success",
      messege: "Todo Added Successfully",
      id: result.id,
    };
    res.status(200).json(data);
  } else {
    let data = {
      status: "Failed",
      messege: "Todo Adding Failed",
    };
    res.status(400).json(data);
  }
};
exports.editTodo = async (req, res, next) => {
  let id = req.body.id;
  let title = req.body.title;
  let desc = req.body.desc;
  let result = await todoModel.editTodo(id, title, desc);
  if (result.id != null) {
    let data = {
      status: "Success",
      messege: "Todo Edited Successfully",
      id: result.id,
    };
    res.status(200).json(data);
  } else {
    let data = {
      status: "Failed",
      messege: "Todo Editing Failed",
    };
    res.status(400).json(data);
  }
};
exports.getTodo = async (req, res, next) => {
  let result = await todoModel.getAllTodo();
  if (result.length === 0) {
    let data = {
      status: "Success",
      messege: "No Todo available",
      data: result,
    };
    res.status(200).json(data);
  } else {
    let data = {
      status: "Success",
      messege: "Todos given below",
      data: result,
    };
    res.status(200).json(data);
  }
};
exports.getTodoById = async (req, res, next) => {
  let id = req.query.id;
  let result = await todoModel.getTodoById(id);
  if (result.length === 0) {
    let data = {
      status: "Success",
      messege: "No Todo available",
      data: result,
    };
    res.status(200).json(data);
  } else {
    let data = {
      status: "Success",
      messege: "Todo given below",
      data: result,
    };
    res.status(200).json(data);
  }
};
exports.deleteTodo = async (req, res, next) => {
  let id = req.query.id;
  let result = await todoModel.deleteTodo(id);
  let data = {
    status: "Success",
    messege: "Todo deleted",
    data: result,
  };
  res.status(200).json(data);
};
