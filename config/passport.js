const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user')

// configuring Passport!
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  }, function(accessToken, refreshToken, profile, cb){ 

		User.findOne({googleId: profile.id}, function(err, user){
			if(user) return cb(null, user); 
			if(err) return cb(err)
			// if user is undefined, we want to create a user
			User.create({
				name: profile.displayName,
				googleId: profile.id,
				email: profile.emails[0].value,
				avatar: profile.photos[0].value
			}, function(err, createdUser){

				if(createdUser) return cb(null, createdUser)
				if(err) return cb(err)

			})


		})
	})
)
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(userId, cb) {
  User.findById(userId, function(err, user){
		if(err) return cb(err);
		cb(null, user);
	})

});



