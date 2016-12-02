'use strict';

let User = function(userId, fullName, userName, password){
  this.userId = userId;
  this.fullName = fullName;
  this.userName = userName;
  this.password = password;
}

module.exports = User;
