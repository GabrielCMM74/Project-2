const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user')

//Require your User Model here!
// console.log(process.env.GOOGLE_CLIENT_ID);
// console.log(process.env.GOOGLE_SECRET);
// console.log(process.env.GOOGLE_CALLBACK);

// configuring Passport!
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  }, function(accessToken, refreshToken, profile, cb){ // cb is what we refer to as the verify callback, this passes information to passport.serializeUser
		// This will be called when the user logins into the app

		// Has a user logged in with oauth before?
		User.findOne({googleId: profile.id}, function(err, user){
			// if user is defined, thenn we found someone, so that means they have logged in before
			// if user is undefined that means they have never logged in
			if(user) return cb(null, user); // passes the information to the next spot in the middleware chain
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
		cb(null, user); // <- this assings the user document we just found to the request object
		// req.user
	})
  // Find your User, using your model, and then call done(err, whateverYourUserIsCalled)
  // When you call this done function passport assigns the user document to req.user, which will 
  // be availible in every Single controller function, so you always know the logged in user

});



