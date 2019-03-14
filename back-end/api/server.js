const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
let cookieParser = require('cookie-parser');
let session = require('express-session');
const users = require('./users.js');
const properties = require('./properties.js');
const workOrders = require('./workorders.js');
const passportSetup = require('./config/passport-setup');
const auth = require('./auth.js');
const keys = require('./config/keys');
const server = express();
const passport = require('passport');

server.use(passport.initialize());
server.use(express.json(), cors(), helmet());
server.use('/users', users);
server.use('/workorders', workOrders);
server.use('/properties', properties);
server.use('/auth', auth);

server.get('/', (req, res) => {
	console.log(auth);
	res.status(200).send('hi');
});

module.exports = server;
