
// featch_Specific_Book_Router.js 

const express = require('express');
const { featch_Specific_Book_Controller } = require('../Controller/featch_Specific_Book_Controller');
const { Authorization } = require('../Controller/authorization');

const featch_Specific_Book_Router = express.Router();

featch_Specific_Book_Router.get("/tasks/:id", Authorization, featch_Specific_Book_Controller);

exports.featch_Specific_Book_Router = featch_Specific_Book_Router;