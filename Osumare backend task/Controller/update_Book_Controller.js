
// update_Book_Controller.js

const { booksArray } = require("./book_Array");

const update_Book_Controller = (req, res) => {

    try {
        const { id } = req.params;

        const book = booksArray.find((b) => b.id === parseInt(id))

        if (!book) {
            console.log("Book not found...".bgRed);
            
            return res.status(404).json({
                
                success : false,
                message : "Book not found...",
            })
        }

        const {title, writter, description} = req.body;

        book.title = title;
        book.writter = writter;
        book.description = description;

        console.log(`Book successfully updated`.bgGreen);
        
        res.status(200).json({

            success : true,
            message : `Book successfully updated`,
            book : book,
            booksArray : booksArray
        });

    } catch (error) {
        
        console.log(`Error in update_Book_Controller API : ${error.message}`.bgRed);
        
        res.status(400).json({
            success : false,
            message : `Error in update_Book_Controller API : ${error.message}`,
        })
    }
}

exports.update_Book_Controller = update_Book_Controller