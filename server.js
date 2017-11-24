var express = require('express');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var exphandlebars  = require('express-handlebars');
var db = require('./db');
const morgan = require('morgan');

// auth
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

var app = express();

// Configure view engine to render EJS templates.
app.engine('handlebars', exphandlebars({defaultLayout: 'main'}));
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

app.use(morgan('common'));
app.use(express.static('public'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());

// routes
app.get('/',
  function(req, res) {
    res.render('index', { user: req.user });
});

app.get('/login',
  function(req, res) {
    res.render('login');
});
  
app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/trips');
});
  
app.get('/logout',
  function(req, res) {
    req.logout();
    res.redirect('/');
});

app.get('/profile',
  require('connect-ensure-login').ensureLoggedIn(),
  function(req, res) {
    res.render('profile', { user: req.user });
});

app.get('/trips_static',
  function(req, res) {
    res.render('trips', { user: req.user });
});

app.get('/trip_static',
  function(req, res) {
    res.render('trip', { user: req.user });
});


const tripsRouter = require("./routers/tripsRouter");
app.use('/trips', tripsRouter);

let server;

function runServer() {
  const port = process.env.PORT || 8080;
  return new Promise((resolve, reject) => {
    server = app.listen(port, () => {
      console.log(`Your app is listening on port ${port}`);
      resolve(server);
    }).on('error', err => {
      reject(err)
    });
  });
}

function closeServer() {
  return new Promise((resolve, reject) => {
    console.log('Closing server');
    server.close(err => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}

if (require.main === module) {
  runServer().catch(err => console.error(err));
};

module.exports = {app, runServer, closeServer};
