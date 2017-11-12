const MOCK_TRIPS_LIST = {
  "tripsAbstracts":[
    {
      "id": "1111",
      "title": "Scotland 2015",
      "description": "Gluten-free pabst mumblecore fixie. Subway tile man bun dreamcatcher green juice viral pabst.",
      "public": true,
      "startDate": "20150620",
      "endDate": "20150624",
      "tripUrl": "/trips/1/scotland-2015",
      "coverPhoto": "https://media-cdn.tripadvisor.com/media/photo-s/0f/4b/02/72/dunnottar-castle-aberdeenshire.jpg",
      "interests": [
        "whiskey", 
        "hiking", 
        "history"
      ],
      "user": {
        "id": "1",
        "fullName": "Brenda Storer",
        "profileUrl": "/1"
      },
      "locations": [
        {
          "name": "Edinburgh",
          "country": "Scotland",
        },
        {
          "name": "Speyside",
          "country": "Scotland"
        }
      ]
    },
    {
      "id": "2222",
      "title": "New York 2017",
      "description": "Neutra try-hard put a bird on it man bun, flannel sriracha occupy crucifix locavore succulents af vice.",
      "public": true,
      "startDate": "20170830",
      "endDate": "20170905",
      "tripUrl": "/trips/1/new-york-2017",
      "coverPhoto": "https://media.architecturaldigest.com/photos/5699802bc6772b7614567435/2:1/w_2560/new-york-city-guide.jpg",
      "interests": [
        "urban", "foodie", "museums"
      ],
      "user": {
        "id": "1",
        "fullName": "Brenda Storer",
        "profileUrl": "/1"
      },
      "locations": [
        {
          "name": "New York City",
          "country": "USA"
        }
      ]
    }
  ]
};

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
    <li class="trips__trip">
      <a href="${trip.tripUrl}" class="trips__trip-title">
        <img src="${trip.coverPhoto}" alt="" class="trips__trip-photo">
        <h2>${trip.title}</h2>
      </a>
      <a href="${trip.user.profileUrl}">
        By ${trip.user.fullName}
      </a>
      <p>${startDate} &ndash; ${endDate}</p>
      <p class="trips__trip-description">${trip.description}</p>
      <!-- list of locations -->
      <!-- list of interests -->
    </li>
  `);
  
  $(".js-trips-list").append(tripTemplate);
}

function displayTrips(data) {
  data.tripsAbstracts.map(function(trip) {
    renderTripList(trip);
  });
}

function getAndDisplayTrips() {
  getTrips(displayTrips);
}

$(function() {
  getAndDisplayTrips();
})