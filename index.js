const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const todoRoutes = require("./Routes/todo_routes");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(todoRoutes);

mongoose
  .connect("mongodb://0.0.0.0:27017/todoDB")
  .then(() => {
    app.listen(3000, () => {
      console.log("MongoDB Connected")
      console.log("Server Started");
    });
  })
  .catch((error) => console.log(error));
