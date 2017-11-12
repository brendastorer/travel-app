const MOCK_TRIP = {
  "id": "1111",
  "title": "Scotland 2015",
  "description": "Gluten-free pabst mumblecore fixie. Subway tile man bun dreamcatcher green juice viral pabst.",
  "public": true,
  "startDate": "20150620",
  "endDate": "20150621",
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
    "profileUrl": "/1",
    "profilePhoto": "http://placebeyonce.com/100-100" 
  },
  "locations": [
    {
      "name": "Edinburgh",
      "country": "Scotland",
      "sites": [
        {
          "name": "Arthur's Seat",
          "address": "",
          "type": "historic site",
          "rating": 10,
          "ratingComment": "Amazing view!"
        },
        {
          "name": "The Albanach",
          "address": "",
          "type": "restaurant/bar",
          "rating": 9,
          "ratingComment": "Best whiskey selection with helpful staff."
        }
      ]
    },
    {
      "name": "Speyside",
      "country": "Scotland"
    }
  ]
};

function getTrip(callbackFn) {
  setTimeout(function(){ 
    callbackFn(MOCK_TRIP)
  }, 100);
}

function displayTrip(trip) {
  const tripTemplate = (
  `
    <img src="${trip.coverPhoto}" alt="">
    <h2>${trip.title}</h2>
    <!-- list each day of trip -->
    <a href="${trip.user.profileUrl}">
      By ${trip.user.fullName}
    </a>
    <p class="trips__trip-description">${trip.description}</p>
  `);
  
  $(".js-trip").append(tripTemplate);
}

function getAndDisplayTrip() {
  getTrip(displayTrip);
}

$(function() {
  getAndDisplayTrip();
})