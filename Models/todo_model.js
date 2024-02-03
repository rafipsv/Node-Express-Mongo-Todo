const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Todo = mongoose.model("todo", todoSchema);

exports.addTodo = async (title, description) => {
  const result = await Todo.create({
    title: title,
    description: description,
  });
  return result;
};
exports.editTodo = async (id, title, description) => {
  const result = await Todo.findByIdAndUpdate(id, {
    title: title,
    description: description,
  });
  return result;
};

exports.getAllTodo = async () => {
  const result = await Todo.find({});
  return result;
};
exports.getTodoById = async (id) => {
  const result = await Todo.findById(id);
  return result;
};

exports.deleteTodo = async (id) => {
  const result = await Todo.findByIdAndDelete(id);
  return result;
};
