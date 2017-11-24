const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {Trips} = require('../models/tripsModel');

// start with a few trips
Trips.create(
  "https://media-cdn.tripadvisor.com/media/photo-s/0f/4b/02/72/dunnottar-castle-aberdeenshire.jpg",
  "My first trip to Scotland",
  "20150625",
  ["whiskey", "hiking", "history"],
  true,
  "20150621",
  "Scotland 2015",
  "http://brendastorer.com"
);

Trips.create(
  "https://cdn2.hercampus.com/florence_1.jpg",
  "First Time Abroad!",
  "19970910",
  ["pasta", "wine", "coffee", "art museums"],
  true,
  "19970830",
  "Florence, Italy 1997",
  "http://brendastorer.com"
);

// return all trips at the root
router.get('/', (req, res) => {
  res.json(Trips.get());
});

// create a new trip
router.post('/', jsonParser, (req, res) => {
  const item = Trips.create(
    req.body.coverPhoto,
    req.body.description,
    req.body.endDate,
    req.body.interests,
    req.body.public,  
    req.body.startDate,
    req.body.title, 
    req.body.tripUrl
  );
  res.status(201).json(item);
});

module.exports = router;