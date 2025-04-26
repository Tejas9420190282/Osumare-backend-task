// createTaskRouter.js

const express = require("express");

const {
    createTaskController,
} = require("../Controller/createTaskController.js");
const { Authorization } = require("../Controller/authorization.js");

const createTaskRouter = express.Router();

createTaskRouter.post("/tasks", Authorization, createTaskController);

exports.createTaskRouter = createTaskRouter;
