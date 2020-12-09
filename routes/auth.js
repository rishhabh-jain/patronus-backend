const express = require('express')
const passport = require('passport')
const router = express.Router()

// @desc    Auth with Google
// @route   GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

// @desc    Google auth callback
// @route   GET /auth/google/callback
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.json(req.user)
    // res.redirect('http://patronus-72ce7.firebaseapp.com');
  }
)
router.get('/login/success', (req, res) => {
  const user = req.user
  res.json({
    success: true,
    message: "user has successfully authenticated",
    name : user 
  });
})
// @desc    Logout user
// @route   /auth/logout
router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('http://patronus-72ce7.firebaseapp.com')
})

module.exports = router