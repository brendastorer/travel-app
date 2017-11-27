function getTrips() {
  $.getJSON(TRIPS_URL, function (data) {
    // use the first trip for now on the trip_static page
    var selectedTrip = data[0];
    getAndDisplayTrip(selectedTrip);

    // show all trips on trips page
    data.map(function (trip) {
      renderTripList(trip);
    });
  });
}

$(function () {
  getTrips();
});
var MOCK_TRIPS_LIST = {
  "trips": [{
    "id": "1111",
    "title": "Scotland 2015",
    "description": "Gluten-free pabst mumblecore fixie. Subway tile man bun dreamcatcher green juice viral pabst.",
    "public": true,
    "startDate": "20150621",
    "endDate": "20150625",
    "tripUrl": "/trips/1/scotland-2015",
    "coverPhoto": "https://media-cdn.tripadvisor.com/media/photo-s/0f/4b/02/72/dunnottar-castle-aberdeenshire.jpg",
    "interests": ["whiskey", "hiking", "history"],
    "user": {
      "id": "1",
      "username": "brenda",
      "password": "limelava",
      "displayname": "Brenda",
      "emails": [{ value: "brendastorer@gmail.com" }],
      "hometown": "New York City",
      "profilePhoto": "http://placebeyonce.com/80-80"
    },
    "media": [{
      "file": "https://media-cdn.tripadvisor.com/media/photo-s/0f/4a/fe/6e/edinburgh-from-calton.jpg",
      "caption": "Edinburgh"
    }, {
      "file": "https://thumbnails.trvl-media.com/IXbKqXCvQEtipRPX3SGASeiEuoI=/960x540/a.travel-assets.com/findyours-php/viewfinder/images/res30/138000/138379-Isle-Of-Skye.jpg",
      "caption": "Isle of Skye"
    }, {
      "file": "https://www.walkhighlands.co.uk/lothian/1_2/1_2_2l.JPG",
      "caption": "From my hike"
    }],
    "days": [{
      "calendarDate": "20150621",
      "diaryEntry": "Truffaut austin bitters twee. Fixie pabst gentrify, beard pug iPhone leggings lyft thundercats master cleanse jean shorts prism shaman craft beer poutine. Cold-pressed yuccie YOLO williamsburg cronut jianbing before they sold out man braid. Lomo yuccie shoreditch taxidermy chartreuse. Man braid gentrify seitan fam YOLO. Cray tumblr letterpress pok pok brunch. Enamel pin retro woke godard aesthetic you probably haven't heard of them umami cronut. Raclette subway tile meh iPhone mustache pinterest cray offal wayfarers messenger bag. Venmo live-edge leggings scenester echo park, activated charcoal pickled vape. Ethical fingerstache gentrify farm-to-table.",
      "travelDetails": "United 209 Depart 9:09pm JFK Arrive next day 9:00am EDI",
      "locations": [{
        "name": "Edinburgh",
        "country": "Scotland",
        "sites": [{
          "name": "Arthur's Seat",
          "address": "",
          "type": "",
          "rating": 3,
          "ratingComment": "Amazing view!"
        }, {
          "name": "Whiski Rooms",
          "address": "",
          "type": "",
          "rating": 2,
          "ratingComment": "Great whiskey selection with helpful staff."
        }, {
          "name": "The Inn Place",
          "address": "20-30 Cockburn Street, Edinburgh",
          "type": "lodging",
          "rating": 3,
          "ratingComment": "Lovely little hotel in a convenient location."
        }]
      }]
    }, {
      "calendarDate": "20150622",
      "diaryEntry": "",
      "travelDetails": "",
      "locations": [{
        "name": "Edinburgh",
        "country": "Scotland",
        "sites": [{
          "name": "Arthur's Seat",
          "address": "",
          "type": "",
          "rating": 3,
          "ratingComment": "Amazing view!"
        }, {
          "name": "Whiski Rooms",
          "address": "",
          "type": "",
          "rating": 2,
          "ratingComment": "Great whiskey selection with helpful staff."
        }, {
          "name": "The Inn Place",
          "address": "20-30 Cockburn Street, Edinburgh",
          "type": "lodging",
          "rating": 3,
          "ratingComment": "Lovely little hotel in a convenient location."
        }]
      }]
    }, {
      "calendarDate": "20150623",
      "diaryEntry": "",
      "travelDetails": "",
      "locations": [{
        "name": "Edinburgh",
        "country": "Scotland",
        "sites": [{
          "name": "The Albanach",
          "address": "",
          "type": "",
          "rating": 3,
          "ratingComment": "Probably the best whiskey selection in the city!"
        }, {
          "name": "The Inn Place",
          "address": "",
          "type": "lodging",
          "rating": 3,
          "ratingComment": "Lovely little hotel in a convenient location."
        }]
      }, {
        "name": "Speyside",
        "country": "Scotland",
        "sites": [{
          "name": "Glenfarclas Distillery",
          "address": "Ballindalloch",
          "type": "",
          "rating": 2,
          "ratingComment": ""
        }, {
          "name": "Craigellachie Hotel",
          "address": "",
          "type": "lodging",
          "rating": 2,
          "ratingComment": ""
        }]
      }]
    }, {
      "calendarDate": "20150624",
      "diaryEntry": "",
      "travelDetails": "",
      "locations": [{
        "name": "Speyside",
        "country": "Scotland",
        "sites": [{
          "name": "Glenlivet Distillery",
          "address": "",
          "type": "",
          "rating": 1,
          "ratingComment": ""
        }, {
          "name": "Craigellachie Hotel",
          "address": "",
          "type": "lodging",
          "rating": 2,
          "ratingComment": ""
        }]
      }]
    }, {
      "calendarDate": "20150625",
      "diaryEntry": "",
      "travelDetails": "United 489 Depart 2:00pm EDI Arrive 7:23pm JFK",
      "locations": [{
        "name": "Edinburgh",
        "country": "Scotland",
        "sites": ""
      }]
    }]
  }]
};
function renderTripHeader(trip) {
  var tripHeaderTemplate = '  \n    <div class="trip-header__photo-container">\n      <img src="' + trip.media[0].file + '" alt="' + trip.media[0].caption + '" class="trip-header__photo">\n    </div>\n    <article class="trip-header__info">\n      <h2 class="heading__x-large">' + trip.title + '</h2>\n      <div class="user-profile">\n        <img src="http://placebeyonce.com/80-80" class="user-profile__photo" alt="">\n        <p class="user-profile__name">\n          By Brenda Storer, New York City\n        </p>\n      </div>\n      <p class="trip__description">' + trip.description + '</p>\n      <ul class="trips-list__interests">\n        ' + trip.interests.map(function (interest) {
    return '<li class="tag">' + interest + '</li>';
  }).join(' ') + '\n      </ul>\n    </article>\n  ';

  $(".js-trip-header").prepend(tripHeaderTemplate);
}

function renderCalendarDays(day) {
  var dayOfWeek = moment(day.calendarDate).format('dddd');
  var formattedDate = moment(day.calendarDate).format('MMM D');

  var tripCalendarTemplate = '\n    <a href="#" class="trip-calendar__day" data-day="' + day.calendarDate + '">\n      <span class="heading__small-caps">\n        ' + dayOfWeek + '\n      </span>\n      <span class="trip-calendar__date">\n        ' + formattedDate + '\n      </span>\n    </a>\n  ';

  $(".js-trip-calendar").append(tripCalendarTemplate);
}

function renderTripDay(trip) {
  var tripDayTemplate = '\n    <aside class="trip-day__sidebar">\n      <section class="trip-day__sidebar-section">\n        <h3 class="heading__small-caps">Places</h3>\n        <h4 class="heading__medium">' + trip.days[0].locations[0].name + ', ' + trip.days[0].locations[0].country + '</h4>\n        <a href="#" class="modal__link">\n          ' + trip.days[0].locations[0].sites[0].name + '\n        </a>\n        <a href="#" class="modal__link">\n          ' + trip.days[0].locations[0].sites[1].name + '\n        </a>\n      </section>\n      <section class="trip-day__sidebar-section">\n        <h3 class="heading__small-caps">Lodging</h3>\n        <a href="#" class="modal__link">\n          ' + trip.days[0].locations[0].sites[2].name + '<br>\n          ' + trip.days[0].locations[0].sites[2].address + '\n        </a>\n      </section>\n      <section class="trip-day__sidebar-section">\n        <h3 class="heading__small-caps">Travel Details</h3>\n        ' + trip.days[0].travelDetails + '\n      </section>\n    </aside>\n    <article class="trip-day__diary">\n      ' + trip.days[0].diaryEntry + '\n      <div class="trip-slideshow js-trip-slideshow"></div>\n    </article>\n  ';

  $(".js-trip-day").prepend(tripDayTemplate);
}

function renderTripPhotos(photo) {
  var tripPhotosTemplate = '\n    <img src="' + photo.file + '" alt="' + photo.caption + '" class="trip-slideshow__photo">\n  ';

  $(".js-trip-slideshow").append(tripPhotosTemplate);
}

function displayCalendarDays(trip) {
  trip.days.map(function (day) {
    renderCalendarDays(day);
  });
}

function displayTripPhotos(trip) {
  trip.media.map(function (photo) {
    renderTripPhotos(photo);
  });
}

function getAndDisplayTrip(selectedTrip) {
  renderTripHeader(selectedTrip);
  displayCalendarDays(selectedTrip);
  renderTripDay(selectedTrip);
  displayTripPhotos(selectedTrip);
}
var TRIPS_URL = '/trips';

function renderTripList(trip) {
  var startDate = moment(trip.startDate).format('LL');
  var endDate = moment(trip.endDate).format('LL');

  var tripTemplate = '\n    <li class="trips-list__trip">\n      <a href="' + trip.tripUrl + '" class="trips-list__link">\n        <div class="trips-list__photo-container">\n          <img src="' + trip.media[0].file + '" alt="' + trip.media[0].caption + '" class="trips-list__photo">\n        </div>\n        <article class="trips-list__info">\n          <header class="trips-list__header">\n            <h2 class="heading__large">' + trip.title + '</h2>\n          </header>\n          <p>' + startDate + ' &ndash; ' + endDate + '</p>\n          <p class="trips-list__description">' + trip.description + '</p>\n          <ul class="trips-list__interests">\n            ' + trip.interests.map(function (interest) {
    return '<li class="tag">' + interest + '</li>';
  }).join(' ') + '\n          </ul>\n        </article>\n      </a>\n    </li>\n  ';

  $(".js-trips-list").append(tripTemplate);
}