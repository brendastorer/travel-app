var express = require('express');
const morgan = require('morgan');
var app = express();

app.use(morgan('common'));
app.use(express.static('public'));

// views
app.get('/', (req, res) => {
  res.status(200).sendFile(__dirname + '/views/index.html');
});

app.get('/trips', (req, res) => {
  res.status(200).sendFile(__dirname + '/views/trips.html');
});

app.get('/trip', (req, res) => {
  res.status(200).sendFile(__dirname + '/views/trip.html');
});

// routes
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
