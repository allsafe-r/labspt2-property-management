const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const users = require('./tenants.js');
const properties = require('./properties.js');
const workOrders = require('./workorders.js');
const stripe = require('./stripe.js');
const images = require('./images.js');
const login = require('./login.js');
const billing = require('./billing.js');
const errorHandler = require('../errorHandler/errors.js');
const mail = require('./nodemailer.js');
const server = express();
const alerts = require('./alerts');

server.use(express.json(), cors(), helmet());
server.use(errorHandler);
server.use('/users', users);
server.use('/workorders', workOrders);
server.use('/properties', properties);
server.use('/stripe', stripe);
server.use('/api', login);
server.use('/images', images);
server.use('/alerts', alerts);
server.use('/billing', billing);
server.use('/send', mail);

server.get('/', (req, res) => {
	res.status(200).send('Hi');
});

module.exports = server;
