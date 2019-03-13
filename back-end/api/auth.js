const express = require('express');
const router = express.Router();

router.get('/google', (req, res) => {
	console.log(res);
});

router.get('/facebook', (req, res) => {
	console.log(res);
});

router.get('/github', (req, res) => {
	console.log(res);
});

module.exports = router;
