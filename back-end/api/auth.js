const passport = require('passport');
const express = require('express');
const router = express.Router();

router.get(
	'/google',
	passport.authenticate('google', {
		scope: [ 'profile' ]
	})
);

//callback route after login
router.get('/google/redirect', (req, res) => {
	res.send('redirected');
});

router.get(
	'/facebook',
	passport.authenticate('facebook', {
		scope: [ 'profile' ]
	})
);

router.get(
	'/github',
	passport.authenticate('github', {
		scope: [ 'profile' ]
	})
);

module.exports = router;
