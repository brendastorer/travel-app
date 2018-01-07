const express = require('express');
const exphandlebars  = require('express-handlebars');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const moment = require('moment');
const mongoose = require('mongoose');
const morgan = require('morgan');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const flash = require('connect-flash');

const {DATABASE_URL, PORT} = require('./config');

const app = express();

const handlebarsHelpers = exphandlebars.create({
  defaultLayout: 'main',
  helpers: {
    formatFullDate: date => {
      return moment(date).format('LL');
    },
    formatFullDateWithDay: date => {
      return moment(date).format('ddd' + ', ' + ' ll');
    },
    formatMonthDay: date => {
      return moment(date).format('MMM D');
    },
    formatDayOfWeek: date => {
      return moment(date).format('ddd');
    },
    formatUnix: date => {
      return moment(date).format('X');
    },
    ifEqual: (lvalue, rvalue, options) => {
      if (arguments.length < 3) {
        throw new Error("Handlebars Helper ifEqual needs 2 parameters");
      }
      if (lvalue != rvalue) {
        return options.inverse(this);
      } 
      else {
        return options.fn(this);
      }
    }
  }
});

app.engine('handlebars', handlebarsHelpers.engine);
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

app.use(morgan('common'));
app.use(express.static('public'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.Promise = global.Promise;

// routes
const routes = require('./routes/index');
const users = require('./routes/users');
app.use('/', routes);

const tripRouter = require("./routes/trips");
app.use('/trips', tripRouter);

app.use('*', function(req, res) {
  res.status(404).json({message: 'Not Found'});
});

// passport config
const Account = require('./models/accountModel');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());


// server
let server;

function runServer(databaseUrl=DATABASE_URL, port=PORT) {
  return new Promise((resolve, reject) => {
    mongoose.connect(databaseUrl, err => {
      if (err) {
        return reject(err);
      }
      server = app.listen(port, () => {
        console.log(`Your app is listening on port ${port}`);
        resolve();
      })
      .on('error', err => {
        mongoose.disconnect();
        reject(err);
      });
    });
  });
}

function closeServer() {
  return mongoose.disconnect().then(() => {
     return new Promise((resolve, reject) => {
       console.log('Closing server');
       server.close(err => {
           if (err) {
               return reject(err);
           }
           resolve();
       });
     });
  });
}

if (require.main === module) {
  runServer().catch(err => console.error(err));
};

module.exports = {app, runServer, closeServer};
