'use strict';

let http = require('http');
let server = require('./lib/server');
let nconf = require('nconf');
let envConfig = require('./lib/config/env_config');

envConfig(nconf);
const PORT = process.env.port || nconf.get('PORT');

server.set('port', PORT);
let app = http.createServer(server);
app.listen(PORT, () => {
	console.log('your server is up');
});
