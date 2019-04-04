const express = require('express');
const router = express.Router();
const db = require('../data/helper/alertsModal');

// Get all alerts
router.get('/', (req, res) => {
	db.getAlerts().then((alerts) => res.status(200).json(alerts)).catch((err) => {
		res.status(500).json({ error: `${err}` });
	});
});
