const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const users = require('./users.js');
const properties = require('./properties.js');
const workOrders = require('./workorders.js');
const server = express();


server.use(express.json(), cors(), helmet());
server.use('/users', users);
server.use('/workorders', workOrders);
server.use('/properties', properties);


server.get('/', (req, res) => {
	res.status(200).send('Hi!');
});



module.exports = server;
