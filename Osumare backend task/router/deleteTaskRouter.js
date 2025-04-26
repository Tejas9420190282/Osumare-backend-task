// deleteTaskRouter.js

const express = require("express");
const { deleteTaskController } = require("../Controller/deleteTaskController");
const { Authorization } = require("../Controller/authorization");

const deleteTaskRouter = express.Router();

deleteTaskRouter.delete("/tasks/:id", Authorization, deleteTaskController);

exports.deleteTaskRouter = deleteTaskRouter;
