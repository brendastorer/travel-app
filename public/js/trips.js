$.getScript("js/mock-trips.js");

function getTrips(callbackFn) {
  setTimeout(function(){ 
    callbackFn(MOCK_TRIPS_LIST)
  }, 100);
}

function renderTripList(trip) {
  const startDate = moment(trip.startDate).format('LL');
  const endDate = moment(trip.endDate).format('LL');
  const tripTemplate = (
  `
    <li class="trips-list__trip">
      <a href="${trip.tripUrl}" class="trips-list__link">
        <img src="${trip.coverPhoto}" alt="" class="trips-list__photo">
        <h2 class="trips-list__title">${trip.title}</h2>
        <span>By ${trip.user.firstName} ${trip.user.lastName}, ${trip.user.hometown}</span>
        <p>${startDate} &ndash; ${endDate}</p>
        <p class="trips-list__description">${trip.description}</p>
        <!-- list of locations -->
        <!-- list of interests -->
      </a>
    </li>
  `);

  $(".js-trips-list").append(tripTemplate);
}

function displayTrips(data) {
  data.trips.map(function(trip) {
    renderTripList(trip);
  });
}

function getAndDisplayTrips() {
  getTrips(displayTrips);
}

$(function() {
  getAndDisplayTrips();
})