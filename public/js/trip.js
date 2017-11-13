$.getScript("js/mock-trips.js");

function getTrip(callbackFn) {
  setTimeout(function(){ 
    callbackFn(MOCK_TRIPS_LIST)
  }, 100);
}

function renderTrip(trip) {
  const tripTemplate = (
  `
    <img src="${trip.days[0].coverPhoto}" alt="">
    <h2>${trip.title}</h2>
    <!-- list each day of trip -->
    <a href="${trip.user.profileUrl}">
      By ${trip.user.fullName}
    </a>
    <p class="trips__trip-description">${trip.description}</p>
  `);

  $(".js-trip").append(tripTemplate);
}

function displayTrip(data) {
  const selectedTrip = data.trips[0];
  renderTrip(selectedTrip);
}

function getAndDisplayTrip() {
  getTrip(displayTrip);
}

$(function() {
  getAndDisplayTrip();
})