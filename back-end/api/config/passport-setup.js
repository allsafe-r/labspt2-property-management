const passport = require('passport');
const GoogleStrat = require('passport-google-oauth20');
const keys = require('./keys');

passport.use(
	new GoogleStrat({
		clientID: keys.google.clientID,
		clientSecret: keys.google.clientSecret
	}),
	() => {
		//passport callback function
	}
);
