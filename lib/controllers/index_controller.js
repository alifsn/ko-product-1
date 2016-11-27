'use strict';

  let index = (req, res, next) => {
    res.status(200).send({status: 'Success', message: 'Index'});
    next();
  };

  let register = (req, res, next) => {
    res.status(200).send({status: 'Success', message: 'Register'});
    next();
  };

  let about = (req,res, next) => {
    res.status(200).send({status: 'Success', message: 'About'});
    next();
  };

  let profile = (req,res, next) => {
    res.status(200).send({status: 'Success', message: 'Profile'});
    next();
  };

  module.exports = {
    index: index,
    register: register,
    about: about,
    profile: profile
  };
