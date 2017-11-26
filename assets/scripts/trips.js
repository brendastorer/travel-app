const TRIPS_URL = '/trips';

function renderTripList(trip) {
  const startDate = moment(trip.startDate).format('LL');
  const endDate = moment(trip.endDate).format('LL');

  const tripTemplate = (
  `
    <li class="trips-list__trip">
      <a href="${trip.tripUrl}" class="trips-list__link">
        <div class="trips-list__photo-container">
          <img src="${trip.media[0].file}" alt="${trip.media[0].caption}" class="trips-list__photo">
        </div>
        <article class="trips-list__info">
          <header class="trips-list__header">
            <h2 class="heading__large">${trip.title}</h2>
            <img src="http://placebeyonce.com/80-80" class="user-profile__photo" alt="Display Name">
          </header>
          <p>${startDate} &ndash; ${endDate}</p>
          <p class="trips-list__description">${trip.description}</p>
          <ul class="trips-list__interests">
            ${trip.interests.map(interest => 
              `<li class="tag">${interest}</li>`).join(' ')
            }
          </ul>
        </article>
      </a>
    </li>
  `);

  $(".js-trips-list").append(tripTemplate);
}