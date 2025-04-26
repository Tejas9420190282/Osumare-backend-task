// updateTaskController.js

const { tasksArray } = require("./task_Array.js.js");

const updateTaskController = (req, res) => {
    try {
        const { id } = req.params;

        const book = tasksArray.find((b) => b.id === parseInt(id));

        if (!book) {
            console.log("Book not found...".bgRed);

            return res.status(404).json({
                success: false,
                message: "Book not found...",
            });
        }

        const { title, writter, description } = req.body;

        book.title = title;
        book.writter = writter;
        book.description = description;

        console.log(`Book successfully updated`.bgGreen);

        res.status(200).json({
            success: true,
            message: `Book successfully updated`,
            book: book,
            tasksArray: tasksArray,
        });
    } catch (error) {
        console.log(
            `Error in updateTaskController API : ${error.message}`.bgRed
        );

        res.status(400).json({
            success: false,
            message: `Error in updateTaskController API : ${error.message}`,
        });
    }
};

exports.updateTaskController = updateTaskController;
