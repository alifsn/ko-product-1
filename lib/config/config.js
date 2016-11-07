'use strict';

let nconf = require('nconf');
let promise = require('bluebird');

//begin database connection
let dbConnectionOptions = {
  promiseLib: promise
};

let pg = require('pg-promise')(dbConnectionOptions);
let connectionDetails = {
  host: nconf.get('DATABASE_HOST'),
  port: nconf.get('DATABASE_PORT'),
  database: nconf.get('DATABASE_NAME'),
  username: nconf.get('DATABASE_USERNAME'),
  password: nconf.get('DATABASE_PASSWORD')
};
let dbConfig = pg(connectionDetails);
//end database connection

module.exports = {
  dbConfig: dbConfig
};
