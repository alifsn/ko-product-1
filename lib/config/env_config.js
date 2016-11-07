'use strict';

let initEnv = (nconf) => {
  nconf.env().file('config.json');
  nconf.defaults({
    'PORT':3000
  });
};

module.exports = initEnv;
