const express = require("express");
const router = express.Router();
const todoController = require("../Controllers/todo_controller");

router.get("/get-all-todo", todoController.getTodo);
router.get("/get-todo-by-id", todoController.getTodoById);
router.post("/add-todo", todoController.addTodo);
router.delete("/delete-todo", todoController.deleteTodo);
router.patch("/edit-todo", todoController.editTodo);
module.exports = router;
