
//delete_Book_By_Id_Controller.js

const { booksArray } = require("./book_Array");

const delete_Book_By_Id_Controller = (req, res) => {
    try {
        const { id } = req.params;

        const book = booksArray.find((b) => b.id === parseInt(id));

        if (!book) {
            console.log("Book not found".bgRed);

            res.status(404).json({
                success: false,
                message: "Book not found",
            });
        }

        const index = booksArray.indexOf(book);
        booksArray.splice(index, 1);
        
        console.log("book deleted Successfully".bgGreen);
        

        res.status(200).json({
            success : true,
            message : "book deleted Successfully",
        });

    } catch (error) {
        console.log(
            `Error in delete_Book_By_Id_Controller API : ${error.message}`.bgRed
        );

        res.status(400).json({
            success: false,
            message: `Error in delete_Book_By_Id_Controller API : ${error.message}`,
        });
    }
};

exports.delete_Book_By_Id_Controller = delete_Book_By_Id_Controller;
