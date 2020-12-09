const GoogleStrategy = require('passport-google-oauth20').Strategy
ID = '676159018096-rl62i8og20rsudmk5pftfira50lf23kr.apps.googleusercontent.com'
SECRET = 'NdGpD48hIXhzP0l-iXrCp7R4'
const User = require('../models/User')
module.exports = function (passport) {
    passport.use(
      new GoogleStrategy(
        {
          clientID: ID,
          clientSecret: SECRET,
          callbackURL: '/auth/google/callback',
        },
        async (accessToken, refreshToken, profile, done) => {
          const newUser = {
            googleId: profile.id,
            displayName: profile.displayName,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            image: profile.photos[0].value,
            isAdmin : false 
          }
          console.log(accessToken)
          try {
            let user = await User.findOne({ googleId: profile.id })
  
            if (user) {
              done(null, user)
            } else {
              user = await User.create(newUser)
              done(null, user)
            }
          } catch (err) {
            console.error(err)
          }
        }
      )
    )
  
    passport.serializeUser((user, done) => {
      done(null, user.id)
    })
  
    passport.deserializeUser((id, done) => {
      User.findById(id, (err, user) => done(err, user))
    })
  }