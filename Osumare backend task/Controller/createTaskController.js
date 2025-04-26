// createTaskController.js

const { tasksArray } = require("./task_Array.js.js");

const createTaskController = (req, res) => {
    try {
        const { title, writter, description } = req.body;

        if (!title || !writter || !description) {
            console.log(`All the inputs are requird....`.bgRed);

            return res.status(400).json({
                success: false,
                message: `All the inputs are requird.....`,
            });
        }

        const newBook = {
            id: tasksArray.length + 1,
            title: title,
            writter: writter,
            description: description,
        };

        tasksArray.push(newBook);

        console.log(`newBook inserted in bookArray....... /n ${newBook}`);

        res.status(200).json({
            success: true,
            message: "newBook inserted in bookArray",
            newBook: newBook,

            tasksArray: tasksArray,
        });
    } catch (error) {
        console.log(
            `Error in createTaskController API : ${error.message}`.bgRed
        );

        res.status(400).json({
            success: false,
            message: `Error in createTaskController API : ${error.message}`,
        });
    }
};

exports.createTaskController = createTaskController;
