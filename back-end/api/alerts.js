const express = require('express');
const router = express.Router();
const db = require('../data/helper/alertsModal');

// Get all alerts
router.get('/', (req, res) => {
	db.getAlerts().then((alerts) => res.status(200).json(alerts)).catch((err) => {
		res.status(500).json({ error: `${err}` });
	});
});

// Get an alert
router.get('/:id', (req, res) => {
	const { id } = req.params;
	db
		.findByAlertId(id)
		.then((alerts) => {
			if (alerts) {
				res.status(200).json(alerts);
			} else {
				res.status(404).json({ error: 'The specified alert does not exist.' });
			}
		})
		.catch((err) => {
			res.status(500).json({ error: `${err}` });
		});
});
