const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const passport = require('passport');
const Strategy = require('passport-local').Strategy;

const {User} = require('../models/userModel');

// Initialize Passport and restore authentication state, if any, from the
// session.
router.use(passport.initialize());
router.use(passport.session());

passport.use(new Strategy(
  function(username, password, cb) {
    User.findByUsername(username, function(err, user) {
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

// show all users
router.get('/users', (req, res) => {
  User
    .find()
    .then(users => {
      res.json(users.map(user => user.apiRepr()));
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({error: 'something went terribly wrong'});
    });
});

// create a new user
router.post('/users', jsonParser, (req, res) => {
  const requiredFields = ['username', 'password', 'displayName', 'emails'];
  for (let i=0; i<requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in req.body)) {
      const message = `Missing \`${field}\` in request body`
      console.error(message);
      return res.status(400).send(message);
    }
  }

  User
    .create({
      username: req.body.username,
      password: req.body.password,
      displayName: req.body.displayName,
      emails: req.body.emails
    })
    .then(user => res.status(201).json(user.apiRepr()))
    .catch(err => {
        console.error(err);
        res.status(500).json({error: 'Something went wrong'});
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