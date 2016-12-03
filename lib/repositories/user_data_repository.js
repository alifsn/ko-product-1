'use strict';

let UserData = require('../domains/user_data');
let fs = require('fs');

let UserDataRepository = function(config){
  this.config = config;
};

UserDataRepository.prototype = {
  findByUserId: (userId, cb, errCb) => {
    fs.readFile('user_data.json', 'utf8', (err, result) => {
      if(err){
        errCb(err);
      }
      let data = JSON.parse(result);
      let userDataResult = '';
      for(let i=0;i<data.length;i++){
        if(userId == data[i].user_id){
          userDataResult = data[i];
          break;
        }
      }
      cb(userDataResult);
    });
  }
};

module.exports = UserDataRepository;
