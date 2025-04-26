// main.js

const colors = require("colors");
const express = require("express");
const { getAllTasksRouter } = require("./router/getAllTasksRouter");
const { createTaskRouter } = require("./router/createTaskRouter");
const { updateTaskRouter } = require("./router/updateTaskRouter");
const {
    featch_Specific_Book_Router,
} = require("./router/featch_Specific_Book_Router");
const { deleteTaskRouter } = require("./router/deleteTaskRouter");

const PORT = 1212;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(getAllTasksRouter);
app.use(createTaskRouter);
app.use(updateTaskRouter);
app.use(featch_Specific_Book_Router);
app.use(deleteTaskRouter);

app.listen(PORT, () => {
    console.log("Server created successfully....".bgGreen);
    console.log(`localhost running on http://localhost:${PORT}`.bgGreen);
});
