'use strict';

let UserRepository = require('../repositories/user_repository');

let index = (req, res, next) => {
  let userRepo = new UserRepository();
    userRepo.findAll(data => {
      res.status(200).send({status: 'Success', data: data});
    }, err => {
      res.status(200).send({status: 'Error', message: err});
    });
};

let register = (req, res, next) => {
  res.status(200).send({status: 'Success', message: 'Register'});
  next();
};

let login = (req, res, next) => {
  res.status(200).send({status: 'Success', message: 'login'});
  next();
};

let profile = (req,res, next) => {
  let userRepo = new UserRepository();
  let userId = req.params.user_id;
  userRepo.findById(userId, data => {
    res.status(200).send({status: 'Success', data: data});
    next();
  }, err => {
    res.status(200).send({status: 'Error', message: err});
    next();
  });
};

let about = (req,res, next) => {
  res.status(200).send({status: 'Success', message: 'About'});
  next();
};

module.exports = {
  index: index,
  register: register,
  about: about,
  profile: profile
};
