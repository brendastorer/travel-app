function renderTripHeader(trip) {
  const tripHeaderTemplate = (
  `  
    <div class="trip-header__photo-container">
      <img src="${trip.media[0].file}" alt="${trip.media[0].caption}" class="trip-header__photo">
    </div>
    <article class="trip-header__info">
      <h2 class="heading--x-large">${trip.title}</h2>
      <div class="user-profile">
        <img src="http://placebeyonce.com/80-80" class="user-profile__photo" alt="">
        <p class="user-profile__name">
          By Brenda Storer, New York City
        </p>
      </div>
      <p class="trip__description">${trip.description}</p>
      <ul class="trips-list__interests">
        ${trip.interests.map(interest => 
          `<li class="tag">${interest}</li>`).join(' ')
        }
      </ul>
    </article>
  `);

  $(".js-trip-header").prepend(tripHeaderTemplate);
}

function renderCalendarDays(day) {
  const dayOfWeek = moment(day.calendarDate).format('dddd');
  const formattedDate = moment(day.calendarDate).format('MMM D');

  const tripCalendarTemplate = (
  `
    <a href="#" class="trip-calendar__day" data-day="${day.calendarDate}">
      <span class="heading--small-caps">
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
        <h3 class="heading--small-caps">Places</h3>
        <h4 class="heading--medium">${trip.days[0].locations[0].name}, ${trip.days[0].locations[0].country}</h4>
        <a href="#" class="modal__link">
          ${trip.days[0].locations[0].sites[0].name}
        </a>
        <a href="#" class="modal__link">
          ${trip.days[0].locations[0].sites[1].name}
        </a>
      </section>
      <section class="trip-day__sidebar-section">
        <h3 class="heading--small-caps">Lodging</h3>
        <a href="#" class="modal__link">
          ${trip.days[0].locations[0].sites[2].name}<br>
          ${trip.days[0].locations[0].sites[2].address}
        </a>
      </section>
      <section class="trip-day__sidebar-section">
        <h3 class="heading--small-caps">Travel Details</h3>
        ${trip.days[0].travelDetails}
      </section>
    </aside>
    <article class="trip-day__diary">
      ${trip.days[0].diaryEntry}
      <div class="trip-slideshow js-trip-slideshow"></div>
    </article>
  `);

  $(".js-trip-day").prepend(tripDayTemplate);
}

function renderTripPhotos(photo) {
  const tripPhotosTemplate = (
  `
    <img src="${photo.file}" alt="${photo.caption}" class="trip-slideshow__photo">
  `);

  $(".js-trip-slideshow").append(tripPhotosTemplate);
}

function displayCalendarDays(trip) {
  trip.days.map(function(day) {
    renderCalendarDays(day);
  });
}

function displayTripPhotos(trip) {
  trip.media.map(function(photo) {
    renderTripPhotos(photo);
  });
}

function getAndDisplayTrip(selectedTrip) {
  renderTripHeader(selectedTrip);
  displayCalendarDays(selectedTrip);
  renderTripDay(selectedTrip);
  displayTripPhotos(selectedTrip);
}