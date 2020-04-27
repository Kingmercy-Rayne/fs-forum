var passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").Strategy;

// Use the GoogleStrategy within Passport.
//   Strategies in passport require a `verify` function, which accept
//   credentials (in this case, a token, tokenSecret, and Google profile), and
//   invoke a callback with a user object.
passport.use(
  new GoogleStrategy(
    {
      consumerKey: process.env.GOOGLE_CONSUMER_KEY,
      consumerSecret: process.env.GOOGLE_CONSUMER_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (token, tokenSecret, profile, done) {
      console.log(profile);
      return cb(new Error("Working on it....."));
    }
  )
);
var GoogleStrategy = require("passport-google-oauth2").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CONSUMER_KEY,
      clientSecret: process.env.GOOGLE_CONSUMER_SECRET,
      callbackURL: "http://yourdormain:3000/auth/google/callback",
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return done(err, user);
      });
    }
  )
);