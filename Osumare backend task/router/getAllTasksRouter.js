// getAllTasksRouter.js

const express = require("express");
const {
    getAllTasksController,
} = require("../Controller/getAllTasksController.js");
const { Authorization } = require("../Controller/authorization.js");

const getAllTasksRouter = express.Router();

getAllTasksRouter.get("/", getAllTasksController);

exports.getAllTasksRouter = getAllTasksRouter;
