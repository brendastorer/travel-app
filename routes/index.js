const express = require('express');
const passport = require('passport');
const Account = require('../models/accountModel');
const router = express.Router();


router.get('/', (req, res) => {
  res.render('index', { user : req.user });
});

router.get('/register', (req, res) => {
  res.render('register', { });
});

router.post('/register', (req, res, next) => {
  Account.register(new Account({ username : req.body.username }), req.body.password, (err, account) => {
    if (err) {
      return res.render('register', { error : err.message });
    }

    passport.authenticate('local')(req, res, () => {
      req.session.save((err) => {
        if (err) {
          return next(err);
      }
      res.redirect('/');
      });
    });
  });
});


router.get('/sign-in', (req, res) => {
  res.render('sign-in', { user : req.user, error : req.flash('error')});
});

router.post('/sign-in', passport.authenticate('local', { failureRedirect: '/sign-in', failureFlash: true }), (req, res, next) => {
  req.session.save((err) => {
    if (err) {
        return next(err);
    }
    res.redirect('/my-trips');
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