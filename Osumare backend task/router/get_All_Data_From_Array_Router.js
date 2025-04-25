
// get_All_Data_From_Array_Router.js

const express = require('express');
const { get_All_Data_From_Array_Controller } = require('../Controller/get_All_Data_From_Array_Controller.js');

const get_All_Data_From_Array_Router = express.Router();

get_All_Data_From_Array_Router.get("/", get_All_Data_From_Array_Controller)

exports.get_All_Data_From_Array_Router = get_All_Data_From_Array_Router

