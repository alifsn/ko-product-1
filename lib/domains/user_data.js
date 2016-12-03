'use strict';

let UserData = function(id, userId, graduationYear, department, university, companyNow, avatar){
  this.id = id;
  this.userId = userId;
  this.graduationYear = graduationYear;
  this.department = department;
  this.university = university;
  this.companyNow = companyNow;
  this.avatar = avatar;
};

module.exports = UserData;
