function getTrips() {
  $.getJSON(TRIPS_URL, {
    format: "json"
  }).done(function (data) {
    // show all trips on my-trips page
    data.map(function (trip) {
      renderTripList(trip);
    });

    // use the first trip for now on the trip_static page
    var selectedTrip = data[0];
    getAndDisplayTrip(selectedTrip);
  });
}

$(function () {
  getTrips();
});
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