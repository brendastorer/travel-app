$.getScript("js/mock-trips.js");

function getTrip(callbackFn) {
  setTimeout(function(){ 
    callbackFn(MOCK_TRIPS_LIST)
  }, 100);
}

function renderTrip(trip) {
  const interests = trip.interests.map(function(interest) {
    return interest;
  });

  const tripTemplate = (
  `
    <header class="trip-header">
      <div class="trip-header__photos">
        <img src="${trip.days[0].photos[0].file}" alt="">
      </div>
      <div class="trip-header__info">
        <h2 class="trip-header__title">${trip.title}</h2>
        <div class="user-profile">
          <img src="${trip.user.profilePhoto}" class="user-profile__photo" alt="">
          <p class="user-profile__name">
            By ${trip.user.firstName} ${trip.user.lastName}, ${trip.user.hometown}
          </p>
        </div>
        <p class="trip__description">${trip.description}</p>
        <div>
          ${interests}
        </div>
      </div>
    </header>
    <!-- list each day of trip -->
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