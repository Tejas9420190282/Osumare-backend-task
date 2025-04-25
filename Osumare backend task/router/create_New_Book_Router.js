
// create_New_Book_Router.js 

const express = require('express');

const { create_New_Book_Router_Controller } = require('../Controller/create_New_Book_Router_Controller.js');

const create_New_Book_Router = express.Router();

create_New_Book_Router.post("/tasks", create_New_Book_Router_Controller);

exports.create_New_Book_Router = create_New_Book_Router;


