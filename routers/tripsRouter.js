const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {Trips} = require('../models/tripsModel');

// start with a few trips
Trips.create(
  [
    {
      "calendarDate": "20150621",
      "diaryEntry": "Truffaut austin bitters twee. Fixie pabst gentrify, beard pug iPhone leggings lyft thundercats master cleanse jean shorts prism shaman craft beer poutine. Cold-pressed yuccie YOLO williamsburg cronut jianbing before they sold out man braid. Lomo yuccie shoreditch taxidermy chartreuse. Man braid gentrify seitan fam YOLO. Cray tumblr letterpress pok pok brunch. Enamel pin retro woke godard aesthetic you probably haven't heard of them umami cronut. Raclette subway tile meh iPhone mustache pinterest cray offal wayfarers messenger bag. Venmo live-edge leggings scenester echo park, activated charcoal pickled vape. Ethical fingerstache gentrify farm-to-table.",
      "travelDetails": "United 209 Depart 9:09pm JFK Arrive next day 9:00am EDI",
      "locations": [
        {
          "name": "Edinburgh",
          "country": "Scotland",
          "sites": [
            {
              "name": "Arthur's Seat",
              "address": "",
              "type": "",
              "rating": 3,
              "ratingComment": "Amazing view!"
            },
            {
              "name": "Whiski Rooms",
              "address": "",
              "type": "",
              "rating": 2,
              "ratingComment": "Great whiskey selection with helpful staff.",
            },
            {
              "name": "The Inn Place",
              "address": "20-30 Cockburn Street, Edinburgh",
              "type": "lodging",
              "rating": 3,
              "ratingComment": "Lovely little hotel in a convenient location."
            }
          ]
        }
      ]
    },
    {
      "calendarDate": "20150622",
      "diaryEntry": "",
      "travelDetails": "",
      "locations": [
        {
          "name": "Edinburgh",
          "country": "Scotland",
          "sites": [
            {
              "name": "Arthur's Seat",
              "address": "",
              "type": "",
              "rating": 3,
              "ratingComment": "Amazing view!"
            },
            {
              "name": "Whiski Rooms",
              "address": "",
              "type": "",
              "rating": 2,
              "ratingComment": "Great whiskey selection with helpful staff.",
            },
            {
              "name": "The Inn Place",
              "address": "20-30 Cockburn Street, Edinburgh",
              "type": "lodging",
              "rating": 3,
              "ratingComment": "Lovely little hotel in a convenient location."
            }
          ]
        }
      ]
    },
    {
      "calendarDate": "20150623",
      "diaryEntry": "",
      "travelDetails": "",
      "locations": [
        {
          "name": "Edinburgh",
          "country": "Scotland",
          "sites": [
            {
              "name": "The Albanach",
              "address": "",
              "type": "",
              "rating": 3,
              "ratingComment": "Probably the best whiskey selection in the city!"
            },
            {
              "name": "The Inn Place",
              "address": "",
              "type": "lodging",
              "rating": 3,
              "ratingComment": "Lovely little hotel in a convenient location."
            }
          ]
        },
        {
          "name": "Speyside",
          "country": "Scotland",
          "sites": [
            {
              "name": "Glenfarclas Distillery",
              "address": "Ballindalloch",
              "type": "",
              "rating": 2,
              "ratingComment": ""
            },
            {
              "name": "Craigellachie Hotel",
              "address": "",
              "type": "lodging",
              "rating": 2,
              "ratingComment": ""
            }
          ]
        }
      ]
    },
    {
      "calendarDate": "20150624",
      "diaryEntry": "",
      "travelDetails": "",
      "locations": [
        {
          "name": "Speyside",
          "country": "Scotland",
          "sites": [
            {
              "name": "Glenlivet Distillery",
              "address": "",
              "type": ""
            },
            {
              "name": "Craigellachie Hotel",
              "address": "",
              "type": "lodging"
            }
          ]
        }
      ]
    },
    {
      "calendarDate": "20150625",
      "diaryEntry": "",
      "travelDetails": "United 489 Depart 2:00pm EDI Arrive 7:23pm JFK",
      "locations": [
        {
          "name": "Edinburgh",
          "country": "Scotland",
          "sites": ""
        }
      ]
    }
  ],
  "My first trip to Scotland",
  "20150625",
  ["whisky", "hiking", "history"],
  [
    {
      "file": "https://media-cdn.tripadvisor.com/media/photo-s/0f/4a/fe/6e/edinburgh-from-calton.jpg",
      "caption": "Edinburgh"
    },
    {
      "file": "https://thumbnails.trvl-media.com/IXbKqXCvQEtipRPX3SGASeiEuoI=/960x540/a.travel-assets.com/findyours-php/viewfinder/images/res30/138000/138379-Isle-Of-Skye.jpg",
      "caption": "Isle of Skye"
    },
    {
      "file": "https://www.walkhighlands.co.uk/lothian/1_2/1_2_2l.JPG",
      "caption": "From my hike"
    }
  ],
  true,
  "20150621",
  "Scotland 2015",
  "http://brendastorer.com"
);

Trips.create(
  [
    {
      "calendarDate": "19970830",
      "diaryEntry": "Truffaut austin bitters twee. Fixie pabst gentrify, beard pug iPhone leggings lyft thundercats master cleanse jean shorts prism shaman craft beer poutine. Cold-pressed yuccie YOLO williamsburg cronut jianbing before they sold out man braid. Lomo yuccie shoreditch taxidermy chartreuse. Man braid gentrify seitan fam YOLO. Cray tumblr letterpress pok pok brunch. Enamel pin retro woke godard aesthetic you probably haven't heard of them umami cronut. Raclette subway tile meh iPhone mustache pinterest cray offal wayfarers messenger bag. Venmo live-edge leggings scenester echo park, activated charcoal pickled vape. Ethical fingerstache gentrify farm-to-table.",
      "travelDetails": "",
      "locations": [
        {
          "name": "Florence",
          "country": "Italy",
          "sites": ""
        }
      ]
    },
    {
      "calendarDate": "19970831",
      "diaryEntry": "Truffaut austin bitters twee. Fixie pabst gentrify, beard pug iPhone leggings lyft thundercats master cleanse jean shorts prism shaman craft beer poutine. Cold-pressed yuccie YOLO williamsburg cronut jianbing before they sold out man braid. Lomo yuccie shoreditch taxidermy chartreuse. Man braid gentrify seitan fam YOLO. Cray tumblr letterpress pok pok brunch. Enamel pin retro woke godard aesthetic you probably haven't heard of them umami cronut. Raclette subway tile meh iPhone mustache pinterest cray offal wayfarers messenger bag. Venmo live-edge leggings scenester echo park, activated charcoal pickled vape. Ethical fingerstache gentrify farm-to-table.",
      "travelDetails": "",
      "locations": [
        {
          "name": "Florence",
          "country": "Italy",
          "sites": ""
        }
      ]
    }
  ],
  "First Time Abroad!",
  "19970831",
  ["pasta", "wine", "coffee", "art museums"],
  [
    {
      "file": "https://cdn2.hercampus.com/florence_1.jpg",
      "caption": "Duomo"
    }
  ],
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
    req.body.days,
    req.body.description,
    req.body.endDate,
    req.body.interests,
    req.body.media,
    req.body.public,  
    req.body.startDate,
    req.body.title, 
    req.body.tripUrl
  );
  res.status(201).json(item);
});

module.exports = router;