const express = require('express');
const passport = require('passport');
const Account = require('../models/accountModel');
const router = express.Router();
const {Trip} = require('../models/tripModel');

router.get('/', (req, res) => {
  res.render('index', {user: req.user});
});

router.get('/register', (req, res) => {
  res.render('register', {});
});

router.post('/register', (req, res, next) => {
  Account.register(new Account({username: req.body.username}), req.body.password, (err, account) => {
    if (err) {
      return res.render('register', {error: err.message});
    }

    passport.authenticate('local')(req, res, () => {
      req.session.save((err) => {
        if (err) {
          return next(err);
      }
      res.redirect('/trips');
      });
    });
  });
});


router.get('/login', (req, res) => {
  res.render('login', {user: req.user, error: req.flash('error')});
});

router.post('/login', passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), (req, res, next) => {
  req.session.save((err) => {
    if (err) {
        return next(err);
    }
    res.redirect('/trips');
    });
});

router.get('/logout', (req, res, next) => {
  req.logout();
  req.session.save((err) => {
    if (err) {
        return next(err);
    }
    res.redirect('/');
  });
});

router.get('/add-trip',
  require('connect-ensure-login').ensureLoggedIn(),
  function(req, res) {
    res.render('trip-form', {user: req.user});
});

module.exports = router;