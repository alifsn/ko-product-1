'use strict';

let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;

let UserRepository = require('../repositories/user_repository');

let passportConfig = {
  init: function(){
    let userRepo = new UserRepository();

    passport.serializeUser((user, done) => {
      done(null, user.userName);
    });

    passport.deserializeUser((username, done) => {
      userRepo.findByEmail(username, result => {
        done(null, result);
      }, err => {
        if(err){
          done(err);
        }
      })
    });

    let strategy = new LocalStrategy({usernameField: 'username', passwordField: 'password', passReqToCallback: true}, (req, username, password, done) => {
      userRepo.findByEmail(username, result => {
        if(!result){
          done(null, false, req.flash('message', 'Username or password is not valid !!'));
        }else if(!result.isValidPassword(password)){
          done(null, false, req.flash('message', 'Username or password is not valid !!'));
        }else{
          done(null, result);
        }
      }, err => {
        if(err){
          done(err);
        }
      });
    });

    passport.use('local', strategy);
    return passport.initialize();
  },

  auth: function(){
    return passport.authenticate('local', {successRedirect: '/user/index', failureRedirect: '/login', failureFlash: true});
  },

  session: function(){
    return passport.session();
  }
};

module.exports = passportConfig;
