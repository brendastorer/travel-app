function getTrip(callbackFn) {
  setTimeout(function(){ 
    callbackFn(MOCK_TRIPS_LIST)
  }, 100);
}

// Pulling in the first trip out of mock data
function firstTrip(data) {
  selectedTrip = data.trips[0];
}

function renderTripHeader(trip) {
  const tripHeaderTemplate = (
  `
    <h2 class="heading__x-large">${trip.title}</h2>
    <div class="user-profile">
      <img src="${trip.user.profilePhoto}" class="user-profile__photo" alt="">
      <p class="user-profile__name">
        By ${trip.user.firstName} ${trip.user.lastName}, ${trip.user.hometown}
      </p>
    </div>
    <p class="trip__description">${trip.description}</p>
  `);

  $(".js-trip-info").prepend(tripHeaderTemplate);
}

function renderTripInterests(interest) {
  const tripInterestsTemplate = (
  `
    <span class="tag">${interest}</span>
  `);

  $(".js-trip-interests").append(tripInterestsTemplate);
}

function renderCalendarDays(day) {
  const dayOfWeek = moment(day.calendarDate).format('dddd');
  const formattedDate = moment(day.calendarDate).format('MMM D');

  const tripCalendarTemplate = (
  `
    <a href="#" class="trip-calendar__day" data-day="${day.calendarDate}">
      <span class="heading__small-caps">
        ${dayOfWeek}
      </span>
      <span class="trip-calendar__date">
        ${formattedDate}
      </span>
    </a>
  `);

  $(".js-trip-calendar").append(tripCalendarTemplate);
}

function renderTripDay(trip) {
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

  $(".js-trip-day").append(tripDayTemplate);
}

function renderTripDayPhotos(trip) {
  const tripDayPhotosTemplate = (
  `
    <img src="${trip.days[0].photos[0].file}" alt="">
  `);

  $(".js-trip-day-photos").append(tripDayPhotosTemplate);
}

function displayTripHeader(data) {
  renderTripHeader(selectedTrip);
}

function displayTripInterests(data) {
  selectedTrip.interests.map(function(interest) {
    renderTripInterests(interest);
  });
}

function displayCalendarDays(data) {
  selectedTrip.days.map(function(day) {
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

$(function() {
  getAndDisplayTrip();
});