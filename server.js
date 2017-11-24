var express = require('express');
var exphandlebars  = require('express-handlebars');
const morgan = require('morgan');

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

// routes
const userRouter = require("./routers/userRouter");
app.use('/', userRouter);

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
