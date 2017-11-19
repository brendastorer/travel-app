// const TRIPS_URL = '/trips';

// function getAndDisplayTrips() {
//   console.log('Retrieving trips');
//   $.getJSON(TRIPS_URL, function(trips) {
//     console.log(trips);
//     trips.map(function(trip) {
//       console.log(`${trip.title}, ${trip.description}`);
//     });
//   });
// }

// $(function() {
//   getAndDisplayTrips();
// });
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
    "media": [{
      "id": "11",
      "file": "https://media-cdn.tripadvisor.com/media/photo-s/0f/4a/fe/6e/edinburgh-from-calton.jpg",
      "caption": "",
      "type": "jpg",
      "size": "24kb"
    }, {
      "id": "22",
      "file": "https://media-cdn.tripadvisor.com/media/photo-s/0f/4a/fe/6e/edinburgh-from-calton.jpg",
      "caption": "",
      "type": "jpg",
      "size": "24kb"
    }, {
      "id": "33",
      "file": "https://www.walkhighlands.co.uk/lothian/1_2/1_2_2l.JPG",
      "caption": "",
      "type": "jpg",
      "size": "24kb"
    }],
    "days": [{
      "id": "111111",
      "calendarDate": "20150621",
      "diaryEntry": "Truffaut austin bitters twee. Fixie pabst gentrify, beard pug iPhone leggings lyft thundercats master cleanse jean shorts prism shaman craft beer poutine. Cold-pressed yuccie YOLO williamsburg cronut jianbing before they sold out man braid. Lomo yuccie shoreditch taxidermy chartreuse. Man braid gentrify seitan fam YOLO. Cray tumblr letterpress pok pok brunch. Enamel pin retro woke godard aesthetic you probably haven't heard of them umami cronut. Raclette subway tile meh iPhone mustache pinterest cray offal wayfarers messenger bag. Venmo live-edge leggings scenester echo park, activated charcoal pickled vape. Ethical fingerstache gentrify farm-to-table.",
      "travelDetails": "United 209 Depart 9:09pm JFK Arrive next day 9:00am EDI",
      "photos": [{
        "id": "11",
        "file": "https://media-cdn.tripadvisor.com/media/photo-s/0f/4a/fe/6e/edinburgh-from-calton.jpg",
        "caption": ""
      }],
      "locations": [{
        "id": "111",
        "name": "Edinburgh",
        "country": "Scotland",
        "sites": [{
          "id": "11111",
          "name": "Arthur's Seat",
          "address": "",
          "type": "historic site",
          "rating": 3,
          "ratingComment": "Amazing view!"
        }, {
          "id": "22222",
          "name": "Whiski Rooms",
          "address": "",
          "type": "restaurant/bar",
          "rating": 2,
          "ratingComment": "Great whiskey selection with helpful staff."
        }, {
          "id": "33333",
          "name": "The Inn Place",
          "address": "20-30 Cockburn Street, Edinburgh",
          "type": "lodging",
          "rating": 3,
          "ratingComment": "Lovely little hotel in a convenient location."
        }]
      }]
    }, {
      "id": "222222",
      "calendarDate": "20150622",
      "diaryEntry": "",
      "travelDetails": "",
      "photos": "",
      "locations": [{
        "id": "111",
        "name": "Edinburgh",
        "country": "Scotland",
        "sites": [{
          "id": "11111",
          "name": "Arthur's Seat",
          "address": "",
          "type": "historic site",
          "rating": 3,
          "ratingComment": "Amazing view!"
        }, {
          "id": "22222",
          "name": "Whiski Rooms",
          "address": "",
          "type": "restaurant/bar",
          "rating": 2,
          "ratingComment": "Great whiskey selection with helpful staff."
        }, {
          "id": "33333",
          "name": "The Inn Place",
          "address": "20-30 Cockburn Street, Edinburgh",
          "type": "lodging",
          "rating": 3,
          "ratingComment": "Lovely little hotel in a convenient location."
        }]
      }]
    }, {
      "id": "333333",
      "calendarDate": "20150623",
      "diaryEntry": "",
      "travelDetails": "",
      "photos": "",
      "locations": [{
        "id": "111",
        "name": "Edinburgh",
        "country": "Scotland",
        "sites": [{
          "id": "22222",
          "name": "The Albanach",
          "address": "",
          "type": "restaurant/bar",
          "rating": 3,
          "ratingComment": "Probably the best whiskey selection in the city!"
        }, {
          "id": "33333",
          "name": "The Inn Place",
          "address": "",
          "type": "lodging",
          "rating": 3,
          "ratingComment": "Lovely little hotel in a convenient location."
        }]
      }, {
        "id": "222",
        "name": "Speyside",
        "country": "Scotland",
        "sites": [{
          "id": "44444",
          "name": "Glenfarclas Distillery",
          "address": "Ballindalloch",
          "type": "",
          "rating": 2,
          "ratingComment": ""
        }, {
          "id": "55555",
          "name": "Craigellachie Hotel",
          "address": "",
          "type": "lodging",
          "rating": 2,
          "ratingComment": ""
        }]
      }]
    }, {
      "id": "444444",
      "calendarDate": "20150624",
      "diaryEntry": "",
      "travelDetails": "",
      "photos": "",
      "locations": [{
        "id": "222",
        "name": "Speyside",
        "country": "Scotland",
        "sites": [{
          "id": "44444",
          "name": "Glenlivet Distillery",
          "address": "",
          "type": "",
          "rating": 1,
          "ratingComment": ""
        }, {
          "id": "55555",
          "name": "Craigellachie Hotel",
          "address": "",
          "type": "lodging",
          "rating": 2,
          "ratingComment": ""
        }]
      }]
    }, {
      "id": "555555",
      "calendarDate": "20150625",
      "diaryEntry": "",
      "travelDetails": "United 489 Depart 2:00pm EDI Arrive 7:23pm JFK",
      "photos": "",
      "locations": [{
        "id": "111",
        "name": "Edinburgh",
        "country": "Scotland",
        "sites": ""
      }]
    }],
    "user": {
      "id": "1",
      "firstName": "Brenda",
      "lastName": "Storer",
      "hometown": "New York City",
      "profilePhoto": "http://placebeyonce.com/80-80"
    }
  }]
};
function getTrip(callbackFn) {
  setTimeout(function () {
    callbackFn(MOCK_TRIPS_LIST);
  }, 100);
}

// Pulling in the first trip out of mock data
function firstTrip(data) {
  selectedTrip = data.trips[0];
}

function renderTripHeader(trip) {
  var tripHeaderTemplate = "\n    <h2 class=\"heading__x-large\">" + trip.title + "</h2>\n    <div class=\"user-profile\">\n      <img src=\"" + trip.user.profilePhoto + "\" class=\"user-profile__photo\" alt=\"\">\n      <p class=\"user-profile__name\">\n        By " + trip.user.firstName + " " + trip.user.lastName + ", " + trip.user.hometown + "\n      </p>\n    </div>\n    <p class=\"trip__description\">" + trip.description + "</p>\n  ";

  $(".js-trip-info").prepend(tripHeaderTemplate);
}

function renderTripInterests(interest) {
  var tripInterestsTemplate = "\n    <span class=\"tag\">" + interest + "</span>\n  ";

  $(".js-trip-interests").append(tripInterestsTemplate);
}

function renderCalendarDays(day) {
  var dayOfWeek = moment(day.calendarDate).format('dddd');
  var formattedDate = moment(day.calendarDate).format('MMM D');

  var tripCalendarTemplate = "\n    <a href=\"#\" class=\"trip-calendar__day\" data-day=\"" + day.calendarDate + "\">\n      <span class=\"heading__small-caps\">\n        " + dayOfWeek + "\n      </span>\n      <span class=\"trip-calendar__date\">\n        " + formattedDate + "\n      </span>\n    </a>\n  ";

  $(".js-trip-calendar").append(tripCalendarTemplate);
}

function renderTripDay(trip) {
  var tripDayTemplate = "\n    <aside class=\"trip-day__sidebar\">\n      <section class=\"trip-day__sidebar-section\">\n        <h3 class=\"heading__small-caps\">Places</h3>\n        <h4 class=\"heading__medium\">" + trip.days[0].locations[0].name + ", " + trip.days[0].locations[0].country + "</h4>\n        <a href=\"#\" class=\"modal__link\">\n          " + trip.days[0].locations[0].sites[0].name + "\n        </a>\n        <a href=\"#\" class=\"modal__link\">\n          " + trip.days[0].locations[0].sites[1].name + "\n        </a>\n      </section>\n      <section class=\"trip-day__sidebar-section\">\n        <h3 class=\"heading__small-caps\">Lodging</h3>\n        <a href=\"#\" class=\"modal__link\">\n          " + trip.days[0].locations[0].sites[2].name + "<br>\n          " + trip.days[0].locations[0].sites[2].address + "\n        </a>\n      </section>\n      <section class=\"trip-day__sidebar-section\">\n        <h3 class=\"heading__small-caps\">Travel Details</h3>\n        " + trip.days[0].travelDetails + "\n      </section>\n    </aside>\n    <article class=\"trip-day__diary\">\n      " + trip.days[0].diaryEntry + "\n    </article>\n  ";

  $(".js-trip-day").append(tripDayTemplate);
}

function renderTripDayPhotos(trip) {
  var tripDayPhotosTemplate = "\n    <img src=\"" + trip.days[0].photos[0].file + "\" alt=\"\">\n  ";

  $(".js-trip-day-photos").append(tripDayPhotosTemplate);
}

function displayTripHeader(data) {
  renderTripHeader(selectedTrip);
}

function displayTripInterests(data) {
  selectedTrip.interests.map(function (interest) {
    renderTripInterests(interest);
  });
}

function displayCalendarDays(data) {
  selectedTrip.days.map(function (day) {
    renderCalendarDays(day);
  });
}

function displayTripDay(data) {
  renderTripDay(selectedTrip);
}

function displayTripDayPhotos(data) {
  renderTripDayPhotos(selectedTrip);
}

function getAndDisplayTrip() {
  getTrip(firstTrip);
  getTrip(displayTripDay);
  getTrip(displayTripDayPhotos);
  getTrip(displayTripHeader);
  getTrip(displayTripInterests);
  getTrip(displayCalendarDays);
}

$(function () {
  getAndDisplayTrip();
});
function getTrips(callbackFn) {
  setTimeout(function () {
    callbackFn(MOCK_TRIPS_LIST);
  }, 100);
}

function renderTripList(trip) {
  var startDate = moment(trip.startDate).format('LL');
  var endDate = moment(trip.endDate).format('LL');
  var interests = trip.interests.map(function (interest) {
    return interest;
  });

  var tripTemplate = '\n    <li class="trips-list__trip">\n      <a href="' + trip.tripUrl + '" class="trips-list__link">\n        <img src="' + trip.coverPhoto + '" alt="" class="trips-list__photo">\n        <article class="trips-list__info">\n          <header class="trips-list__header">\n            <h2 class="heading__large">' + trip.title + '</h2>\n            <img class="user-profile__photo" src="' + trip.user.profilePhoto + '" alt="By ' + trip.user.firstName + ' ' + trip.user.lastName + '">\n          </header>\n          <p>' + startDate + ' &ndash; ' + endDate + '</p>\n          <p class="trips-list__description">' + trip.description + '</p>\n          <div>\n            ' + interests + '\n          </div>\n        </article>\n      </a>\n    </li>\n  ';

  $(".js-trips-list").append(tripTemplate);
}

function displayTrips(data) {
  data.trips.map(function (trip) {
    renderTripList(trip);
  });
}

function getAndDisplayTrips() {
  getTrips(displayTrips);
}

$(function () {
  getAndDisplayTrips();
});