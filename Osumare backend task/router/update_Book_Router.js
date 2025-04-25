
// update_Book_Router.js 

const express = require('express');
const { update_Book_Controller } = require('../Controller/update_Book_Controller');

const update_Book_Router = express.Router();

update_Book_Router.put("/tasks/:id", update_Book_Controller);

exports.update_Book_Router = update_Book_Router;