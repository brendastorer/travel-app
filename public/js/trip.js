$.getScript("js/mock-trips.js");

function getTrip(callbackFn) {
  setTimeout(function(){ 
    callbackFn(MOCK_TRIPS_LIST)
  }, 100);
}

function renderTrip(trip) {
  const dayOfWeek = moment(trip.days[0].calendarDate).format('dddd');
  const formattedDate = moment(trip.days[0].calendarDate).format('MMM D');
  const interests = trip.interests.map(function(interest) {
    return interest;
  });

  const tripHeaderTemplate = (
  `
    <div class="trip-header__photos">
      <img src="${trip.days[0].photos[0].file}" alt="">
    </div>
    <div class="trip-header__info">
      <h2 class="heading__x-large">${trip.title}</h2>
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
  `);

  const tripCalendarTemplate = (
  `
    <div class="trip-calendar__day">
      <span class="heading__small-caps">
        ${dayOfWeek}
      </span>
      <span class="trip-calendar__date">
        ${formattedDate}
      </span>
    </div>
  `);

  const tripDayTemplate = (
  `
    <aside class="trip-day__sidebar">
      <section class="trip-day__sidebar-section">
        <h3 class="heading__small-caps">Places</h3>
        <h4 class="heading__medium">${trip.days[0].locations[0].name}, ${trip.days[0].locations[0].country}</h4>
        <a href="#" class="modal__link">
          ${trip.days[0].locations[0].sites[0].name}
        </a>
        <a href="#" class="modal__link">
          ${trip.days[0].locations[0].sites[1].name}
        </a>
      </section>
      <section class="trip-day__sidebar-section">
        <h3 class="heading__small-caps">Lodging</h3>
        <a href="#" class="modal__link">
          ${trip.days[0].locations[0].sites[2].name}<br>
          ${trip.days[0].locations[0].sites[2].address}
        </a>
      </section>
      <section class="trip-day__sidebar-section">
        <h3 class="heading__small-caps">Travel Details</h3>
        ${trip.days[0].travelDetails}
      </section>
    </aside>
    <article class="trip-day__diary">
      ${trip.days[0].diaryEntry}
    </article>
  `);

  $(".js-trip-header").append(tripHeaderTemplate);
  $(".js-trip-calendar").append(tripCalendarTemplate);
  $(".js-trip-day").append(tripDayTemplate);
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