'use strict';

let express = require('express');
let morgan = require('morgan');
let indexController = require('../lib/controllers/index_controller');

let app = express();
app.use(morgan('dev'));


app.get('/', indexController.index);
app.get('/register', indexController.register);
app.get('/about', indexController.about);


module.exports = app;
