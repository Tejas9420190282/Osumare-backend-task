
// main.js

const colors = require('colors');
const express = require('express');
const { get_All_Data_From_Array_Router } = require('./router/get_All_Data_From_Array_Router');
const { create_New_Book_Router } = require('./router/create_New_Book_Router');
const { update_Book_Router } = require('./router/update_Book_Router');
const { featch_Specific_Book_Router } = require('./router/featch_Specific_Book_Router');
const { delete_Book_By_Id_Router } = require('./router/delete_Book_By_Id_Router');

const PORT = 1212;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use(get_All_Data_From_Array_Router);
app.use(create_New_Book_Router);
app.use(update_Book_Router);
app.use(featch_Specific_Book_Router);
app.use(delete_Book_By_Id_Router);


app.listen(PORT, () => {

    console.log("Server created successfully....".bgGreen);
    console.log(`localhost running on http://localhost:${PORT}`.bgGreen);
    
})

