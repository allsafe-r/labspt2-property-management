<<<<<<< HEAD
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const users = require("./users.js");
const properties = require("./properties.js");
const workOrders = require("./workorders.js");
const stripe = require("./stripe.js");
const images = require("./images.js");
const login = require("./login.js");
const billing = require("./billinghistory.js");
const errorHandler = require("../errorHandler/errors.js");
const mail = require("./nodemailer.js");
=======
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const tenants = require('./tenants.js');
const landlords = require('./landlords.js');
const properties = require('./properties.js');
const workOrders = require('./workorders.js');
const stripe = require('./stripe.js');
const images = require('./images.js');
const authentication = require('./authentication.js');
const billing = require('./billing.js');
const errorHandler = require('../errorHandler/errors.js');
const mail = require('./nodemailer.js');
>>>>>>> 5f44f16e656c73df5587b242fc35d5c00a1b60c7
const server = express();
const alerts = require("./alerts");
const contracts = require("./contracts.js");

server.use(express.json(), cors(), helmet());
server.use(errorHandler);
<<<<<<< HEAD
server.use("/users", users);
server.use("/workorders", workOrders);
server.use("/properties", properties);
server.use("/stripe", stripe);
server.use("/api", login);
server.use("/images", images);
server.use("/alerts", alerts);
server.use("/billing", billing);
server.use("/send", mail);
server.use("/contracts", contracts);
=======
server.use('/tenants', tenants);
server.use('/landlords', landlords);
server.use('/workorders', workOrders);
server.use('/properties', properties);
server.use('/stripe', stripe);
server.use('/api', authentication);
server.use('/images', images);
server.use('/alerts', alerts);
server.use('/billing', billing);
server.use('/send', mail);
>>>>>>> 5f44f16e656c73df5587b242fc35d5c00a1b60c7

server.get("/", (req, res) => {
  res.status(200).send("Hi");
});

module.exports = server;
