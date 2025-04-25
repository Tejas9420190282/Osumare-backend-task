
// create_New_Book_Router_Controller.js 

const { booksArray } = require("./book_Array");

const create_New_Book_Router_Controller = (req, res) => {

    try {

        const {title, writter, description} = req.body;

        if (!title || !writter || !description) {
            
            console.log(`All the inputs are requird....`.bgRed);
            
            return res.status(400).json({

                success : false,
                message : `All the inputs are requird.....`,               
            })
        }

        const newBook = {
            
            id : booksArray.length + 1,
            title : title,
            writter : writter,
            description : description,
        }

        booksArray.push(newBook);

        console.log(`newBook inserted in bookArray....... /n ${newBook}`);
        
        res.status(200).json({
            
            success : true,
            message : "newBook inserted in bookArray",
            newBook : newBook,

            booksArray : booksArray
        })
        
    } catch (error) {
        
        console.log(`Error in create_New_Book_Router_Controller API : ${error.message}`.bgRed);
        
        res.status(400).json({
            success : false,
            message : `Error in create_New_Book_Router_Controller API : ${error.message}`,
        })
    }
}

exports.create_New_Book_Router_Controller = create_New_Book_Router_Controller;

