const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const server = express();

server.use(express.json(), cors(), helmet());

server.get('/', (req, res) => {
	res.status(200).send('Hi!');
});

module.exports = server;
