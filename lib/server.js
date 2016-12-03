'use strict';

let express = require('express');
let morgan = require('morgan');
let bodyParser = require('body-parser');

//required for passport
let ensure = require('connect-ensure-login');
let session = require('express-session');
let flash = require('connect-flash');

let passport = require('../lib/config/passport');

let indexController = require('../lib/controllers/index_controller');
let userController = require('../lib/controllers/user_controller');

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));
//required for passport
app.use(session({secret: 'knockouttech'}));
app.use(passport.init());
app.use(passport.session());
app.use(flash());


app.get('/', indexController.index);
app.get('/register', indexController.register);
app.get('/login', indexController.login);
app.post('/login', passport.auth());
app.get('/about', indexController.about);

app.get('/user/index', ensure.ensureLoggedIn(), userController.index);
app.get('/user/my_profile', ensure.ensureLoggedIn(), userController.myProfile);
app.get('/user/my_data', ensure.ensureLoggedIn(), userController.myData);
app.get('/user/logout', userController.logout);


module.exports = app;
