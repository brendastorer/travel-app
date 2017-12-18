const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {Trip} = require('../models/tripModel');

// return all trips at the root
router.get('/', (req, res) => {
  Trip
    .find()
    .then(trips => {
      res.json(trips.map(trip => trip.apiRepr()));
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({error: 'something went terribly wrong'});
    });
});

router.get('/:id', (req, res) => {
  Trip
    .findById(req.params.id)
    .then(trip => {
      res
        .render('trip', {
          trip: trip.apiRepr(),
          user: req.user
        })
        .redirect('/:id/edit-locations');
    });
});

router.get('/:id/edit-locations', (req, res) => {
  Trip
    .findById(req.params.id)
    .then(trip => {
      res.render('location-form', {
        trip: trip.apiRepr(),
        user: req.user
      });
  });
});

// create a new trip
router.post('/', jsonParser, (req, res) => {
  const requiredFields = ['title', 'description'];
  for (let i=0; i<requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in req.body)) {
      const message = `Missing \`${field}\` in request body`
      console.error(message);
      return res.status(400).send(message);
    }
  }

  function createDays(startDate, endDate) {
    const getDates = function(firstDate, lastDate) {
      let dates = [],
      addDays = function(days) {
        let date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
      };
      while (firstDate <= lastDate) {
        dates.push(firstDate);
        firstDate = addDays.call(firstDate, 1);
      }
      return dates;
    };

    const dates = getDates(new Date(startDate), new Date(endDate));                                                                                                             
    const daysAsObjects = dates.map(function(date) {
      return {
        "calendarDate": date,
        "diaryEntry": "",
        "locations": [],
        "lodging": {},
        "sites": [],
        "travelDetails": ""
      };
    });

    return daysAsObjects;
  };

  Trip
    .create({
      title: req.body.title,
      description: req.body.description,
      postedBy: req.body.postedBy,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      tripUrl: req.body.tripUrl,
      public: req.body.public,
      interests: req.body.interests,
      media: req.body.media,
      days: createDays(req.body.startDate, req.body.endDate)
    })
    .then(trip => res.status(201).json(trip.apiRepr()))
    .catch(err => {
        console.error(err);
        res.status(500).json({error: 'Something went wrong'});
    });
});

// delete a trip
router.delete('/:id', (req, res) => {
  Trip
    .findByIdAndRemove(req.params.id)
    .then(() => {
      res.status(204).json({message: 'success'});
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({error: 'something went terribly wrong'});
    });
});

router.put('/:id', jsonParser, (req, res) => {
  if (!(req.params.id && req.body.id && req.params.id === req.body.id)) {
    res.status(400).json({
      error: 'Request path id and request body id values must match'
    });
  }

  const updated = {};
  const updateableFields = ['title', 'description', 'startDate', 'endDate', 'public', 'interests', 'media', 'days'];
  updateableFields.forEach(field => {
    if (field in req.body) {
      updated[field] = req.body[field];
    }
  });

  Trip.findById(req.params.id).then(updatedTrip => console.log(updatedTrip));

  // Trip
  //   .findByIdAndUpdate(req.params.id, updated, {new: true})
  //   .then(updatedTrip => {res.status(204).end()})
  //   .catch(err => res.status(500).json({message: 'Something went wrong'}));
});


module.exports = router;