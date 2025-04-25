
// delete_Book_By_Id_Router.js

const express = require('express');
const { delete_Book_By_Id_Controller } = require('../Controller/delete_Book_By_Id_Controller');


const delete_Book_By_Id_Router = express.Router();

delete_Book_By_Id_Router.delete("/tasks/:id", delete_Book_By_Id_Controller);

exports.delete_Book_By_Id_Router = delete_Book_By_Id_Router;
