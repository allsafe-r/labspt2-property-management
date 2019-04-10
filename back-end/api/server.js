const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const users = require('./users.js');
const properties = require('./properties.js');
const workOrders = require('./workorders.js');
const stripe = require('./stripe.js');
const images = require('./images.js');
const login = require('./login.js');
const billing = require('./billinghistory.js');
const errorHandler = require('../errorHandler/errors.js');
const server = express();

server.use(express.json(), cors(), helmet());
server.use(errorHandler);
server.use('/users', users);
server.use('/workorders', workOrders);
server.use('/properties', properties);
server.use('/stripe', stripe);
server.use('/api', login);
server.use('/images', images);
<<<<<<< HEAD
=======
server.use('/alerts', alerts);
server.use('/billing', billing);
>>>>>>> 53cb0ca94db436aabad7a9f258b8b016adb41a9c

server.get('/', (req, res) => {
	res.status(200).send('Hi!');
});

module.exports = server;
