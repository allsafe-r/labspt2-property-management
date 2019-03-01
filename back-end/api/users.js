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

router.get('/:id', (req, res) => {
	const { id } = req.params;
	db
		.findByUserId(id)
		.then((user) => {
			if (user) {
				res.status(200).json(user);
			} else {
				res.status(404).json({ error: 'User not found' });
			}
		})
		.catch((err) => {
			res.status(500).json({ error: `${err}` });
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
