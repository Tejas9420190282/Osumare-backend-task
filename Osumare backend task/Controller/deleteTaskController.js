//deleteTaskController.js

const { tasksArray } = require("./task_Array.js.js");

const deleteTaskController = (req, res) => {
    try {
        const { id } = req.params;

        const book = tasksArray.find((b) => b.id === parseInt(id));

        if (!book) {
            console.log("Book not found".bgRed);

            res.status(404).json({
                success: false,
                message: "Book not found",
            });
        }

        const index = tasksArray.indexOf(book);
        tasksArray.splice(index, 1);

        console.log("book deleted Successfully".bgGreen);

        res.status(200).json({
            success: true,
            message: "book deleted Successfully",
        });
    } catch (error) {
        console.log(
            `Error in deleteTaskController API : ${error.message}`.bgRed
        );

        res.status(400).json({
            success: false,
            message: `Error in deleteTaskController API : ${error.message}`,
        });
    }
};

exports.deleteTaskController = deleteTaskController;
