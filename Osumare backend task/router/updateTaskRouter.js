// updateTaskRouter.js

const express = require("express");
const { updateTaskController } = require("../Controller/updateTaskController");
const { Authorization } = require("../Controller/authorization");

const updateTaskRouter = express.Router();

updateTaskRouter.put("/tasks/:id", Authorization, updateTaskController);

exports.updateTaskRouter = updateTaskRouter;


