'use strict';

let index = (req, res, next) => {
  res.status(200).send({status: 'Success', message: 'index'});
};

let register = (req, res, next) => {
  res.status(200).send({status: 'Success', message: 'Register'});
  next();
};

let login = (req, res, next) => {
  res.status(200).send({status: 'Success', message: 'login'});
  next();
};

let about = (req,res, next) => {
  res.status(200).send({status: 'Success', message: 'About'});
  next();
};

module.exports = {
  index: index,
  login: login,
  register: register,
  about: about
};
