'use strict';

let User = require('../domains/user');
let fs = require('fs');

let UserRepository = function(config){

};

UserRepository.prototype = {
  findAll: (cb, errCb) => {
    fs.readFile('users.json', 'utf8', (err, result) => {
      if(err){
        errCb(err);
      }
      let data = JSON.parse(result);
      let userList = [];
      for(let i=0;i<data.length;i++){
        let u = data[i];
        let user = new User(u.user_id, u.full_name, u.username, u.password);
        userList.push(user);
      }
      cb(userList);
    });
  },


  findByEmail: (email, cb, errCb) => {
    fs.readFile('users.json', 'utf8', (err, result) => {
      if(err){
        errCb(err);
      }
      let data = JSON.parse(result);
      let u = '';
      for(let i=0;i<data.length;i++){
        if(email === data[i].username){
          u = data[i];
          break;
        }
      }
      let user = new User(u.user_id, u.full_name, u.username, u.password);
      cb(user);
    });
  },

  findById: (userId, cb, errCb) => {
    fs.readFile('users.json', 'utf8', (err, result) => {
      if(err){
        errCb(err);
      }
      let data = JSON.parse(result);
      let u = '';
      for(let i=0;i<data.length;i++){
        if(userId == data[i].user_id){
          u = data[i];
          break;
        }
      }
      let user = new User(u.user_id, u.full_name, u.username, u.password);
      cb(user);
    });
  }

} ;

module.exports = UserRepository;
