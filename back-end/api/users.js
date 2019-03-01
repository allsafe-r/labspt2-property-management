const express = require('express');
const router = express.Router();
const db = require('../data/helper/userModal');

router.get('/', (req, res) => {
	db.getUsers().then((users) =>
		res.status(200).json(users).catch((err) => {
			res.status(500).json({ error: `${err}` });
		})
	);
});

router.get('/admins', (req, res) => {
	db.getAdmins().then((admins) => {
		res.status(200).json(admins).catch((err) => {
			res.status(500).json({ error: `${err}` });
		});
	});
});

router.get('/tenants', (req, res) => {
	db.getTenants().then((tenants) => {
		res.status(200).json(tenants).catch((err) => {
			res.status(500).json({ error: `${err}` });
		});
	});
});

module.exports = router;
