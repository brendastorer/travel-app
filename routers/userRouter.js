const express = require('express');
const router = express.Router();
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var db = require('../db');

// Initialize Passport and restore authentication state, if any, from the
// session.
router.use(passport.initialize());
router.use(passport.session());

passport.use(new Strategy(
  function(username, password, cb) {
    db.users.findByUsername(username, function(err, user) {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
      if (user.password != password) { return cb(null, false); }
      return cb(null, user);
    });
  }));

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  db.users.findById(id, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
});

router.get('/',
  function(req, res) {
    res.render('index', { user: req.user });
});

router.get('/login',
  function(req, res) {
    res.render('login');
});
  
router.post('/login', 
  passport.authenticate('local', { 
    failureRedirect: '/login',
    failureFlash: true
  }),
  function(req, res) {
    res.redirect('/my-trips');
});
  
router.get('/logout',
  function(req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/my-trips',
  // require('connect-ensure-login').ensureLoggedIn(),
  function(req, res) {
    res.render('trips', { user: req.user });
});

router.get('/trip_static',
  function(req, res) {
    res.render('trip', { user: req.user });
});

module.exports = router;