
// get_All_Data_From_Array_Controller.js

const { booksArray } = require("./book_Array");

const get_All_Data_From_Array_Controller = (req, res) => {
    try {
        
        const data = res.json(booksArray)

        res.status(400).json({
            success : false,
            message : `All data featch successfully`,
            data : data
        })
    } catch (error) {
        
        console.log(`Error in get_All_Data_From_Array_Controller API : ${error.message}`.bgRed);
        
        res.status(400).json({
            success : false,
            message : `Error in get_All_Data_From_Array_Controller API : ${error.message}`,
        })
    }
}

exports.get_All_Data_From_Array_Controller = get_All_Data_From_Array_Controller