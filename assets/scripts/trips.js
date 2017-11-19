function getTrips(callbackFn) {
  setTimeout(function(){ 
    callbackFn(MOCK_TRIPS_LIST)
  }, 100);
}

function renderTripList(trip) {
  const startDate = moment(trip.startDate).format('LL');
  const endDate = moment(trip.endDate).format('LL');
  const interests = trip.interests.map(function(interest) {
    return interest;
  });

  const tripTemplate = (
  `
    <li class="trips-list__trip">
      <a href="${trip.tripUrl}" class="trips-list__link">
        <img src="${trip.coverPhoto}" alt="" class="trips-list__photo">
        <article class="trips-list__info">
          <header class="trips-list__header">
            <h2 class="heading__large">${trip.title}</h2>
            <img class="user-profile__photo" src="${trip.user.profilePhoto}" alt="By ${trip.user.firstName} ${trip.user.lastName}">
          </header>
          <p>${startDate} &ndash; ${endDate}</p>
          <p class="trips-list__description">${trip.description}</p>
          <div>
            ${interests}
          </div>
        </article>
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