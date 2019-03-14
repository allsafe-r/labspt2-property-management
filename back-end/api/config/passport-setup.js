const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const db = require('../../data/helper/usersModal');

passport.serializeUser((user, done) => {
	// done(null, user.id);
	done(null, user);
});

passport.deserializeUser((obj, done) => {
	// Users.findById(obj, done);
	done(null, obj);
});

passport.use(
	//the info that google uses to help authenticate and where it's redirected after receiving a token
	new GoogleStrategy(
		{
			callbackURL: '/auth/google/redirect',
			clientID: keys.google.clientID,
			clientSecret: keys.google.clientSecret
		},
		(accessToken, refreshToken, profile, done) => {
			const newUser = {
				name: profile.displayName,
				email: profile.emails[0].value,
				phone: '555',
				displayName: profile.displayName
			};
			//passport callback function -- runs after it grabs info from google and returns params
			db.findByUserEmail(profile.emails[0].value).then((user) => {
				if (user) {
					return done(null, user);
				} else {
					db.createUser(newUser).then((user) => {
						return done(null, user);
					});
				}
			});
		}
	)
);
