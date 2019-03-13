const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');

passport.use(
	//the info that google uses to help authenticate and where it's redirected after receiving a token
	new GoogleStrategy(
		{
			callbackURL: '/auth/google/redirect',
			clientID: keys.google.clientID,
			clientSecret: keys.google.clientSecret
		},
		(accessToken, refreshToken, profile, done) => {
			//passport callback function -- runs after it grabs info from google and returns params
			console.log({ profile: profile });
			console.log({ accessToken: accessToken });
			console.log({ refreshToken: refreshToken });
		}
	)
);
