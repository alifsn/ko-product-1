'use strict';

let express = require('express');
let morgan = require('morgan');
let bodyParser = require('body-parser');
let indexController = require('../lib/controllers/index_controller');

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));


app.get('/', indexController.index);
app.get('/register', indexController.register);
app.get('/about', indexController.about);
app.get('/profile/:user_id', indexController.profile);


module.exports = app;
