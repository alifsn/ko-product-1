'use strict';

let express = require('express');
let morgan = require('morgan');

let app = express();
app.use(morgan('dev'));

app.get('/', (req, res, next) => {
    res.status(200).send({message: 'this is us,,,,, KNOCK OUT TECH :D'});
    next();
});


module.exports = app;
