const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const users = require('./users.js');
const properties = require('./properties.js');
const workOrders = require('./workorders.js');
const stripe = require('./stripe.js');
const images = require('./images.js')

const login = require('./login.js');
const errorHandler = require('../errorHandler/errors.js');
const server = express();

server.use(express.json(), cors(), helmet());
server.use('/users', users);
server.use('/workorders', workOrders);
server.use('/properties', properties);
server.use('/stripe', stripe);
server.use('/api', login);
server.use('/images', images);

server.get('/', (req, res) => {
	res.status(200).send('Hi!');
});

server.use(errorHandler);
module.exports = server;
