
// getAllTasksController.js

const { tasksArray } = require("./task_Array.js.js");

const getAllTasksController = (req, res) => {
    try {
        

        res.status(400).json({
            success: false,
            message: `All data featch successfully`,
            data: tasksArray,
        });
    } catch (error) {
        console.log(
            `Error in getAllTasksController API : ${error.message}`.bgRed
        );

        res.status(400).json({
            success: false,
            message: `Error in getAllTasksController API : ${error.message}`,
        });
    }
};

exports.getAllTasksController = getAllTasksController;

