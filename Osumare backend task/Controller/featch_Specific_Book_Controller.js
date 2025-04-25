
// featch_Specific_Book_Controller.js 

const { booksArray } = require("./book_Array");

const featch_Specific_Book_Controller = (req, res) => {
    try {
        const { id } = req.params;

        const book = booksArray.find((b) => b.id === parseInt(id));
        
        if (!book) {

            console.log("Book not found...".bgRed);
            
            return res.status(404).json({

                success: false,
                message: "Book not found...",
            });
        }

        console.log("Book data featch successfully".bgGreen);
        
        res.status(200).json({

            success : true,
            message : "Book data featch successfully",
            book : book
        })

    } catch (error) {
        console.log(
            `Error in featch_Specific_Book_Controller API : ${error.message}`
                .bgRed
        );

        res.status(400).json({
            success: false,
            message: `Error in featch_Specific_Book_Controller API : ${error.message}`,
        });
    }
};

exports.featch_Specific_Book_Controller = featch_Specific_Book_Controller;
