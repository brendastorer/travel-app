const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {Trips} = require('../models/tripsModel');

Trips.create('Scotland 2017', 'My second trip to Scotland');

// return all trips at the root
router.get('/', (req, res) => {
  res.json(Trips.get());
});

// create a new trip
router.post('/', jsonParser, (req, res) => {
  const requiredFields = ['title', 'description'];
  for (let i = 0; i < requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in req.body)) {
      const message = `Missing \`${field}\` in request body`
      console.error(message);
      return res.status(400).send(message);
    }
  }

  const item = Trips.create(req.body.title, req.body.description);
  res.status(201).json(item);
});

module.exports = router;