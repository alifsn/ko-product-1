'use strict';

let UserRepository = require('../repositories/user_repository');
let UserDataRepository = require('../repositories/user_data_repository');

let index = (req, res, next) => {
  let user = req.user;
  let message = `Selamat datang ${user.fullName}`;
  res.status(200).send({message: message});
};

let myProfile = (req,res, next) => {
  let userRepo = new UserRepository();
  let userId = req.user.userId;
  userRepo.findById(userId, data => {
    res.status(200).send({status: 'Success', data: data});
    next();
  }, err => {
    res.status(200).send({status: 'Error', message: err});
    next();
  });
};

let myData = (req, res, next) => {
  let userDataRepo = new UserDataRepository();
  let user = req.user;
  userDataRepo.findByUserId(user.userId, data => {
    res.status(200).send({status: 'success', data: data});
    next();
  }, err => {
    res.status(401).send({status: 'error', message: 'you must login'});
    next();
  });
};

let logout = (req, res, next) => {
  req.logout();
  res.status(200).send({status: 'success', message: 'logout....'});
  next();
};

module.exports = {
  index: index,
  myProfile: myProfile,
  myData: myData,
  logout: logout
};
