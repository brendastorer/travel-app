const MOCK_TRIPS = {
  "trips":[
    {
      "id": "1111",
      "title": "Scotland 2015",
      "description": "Gluten-free pabst mumblecore fixie. Subway tile man bun dreamcatcher green juice viral pabst.",
      "public": true,
      "startDate": "20150620",
      "endDate": "20150621",
      "coverPhoto": "",
      "interests": [
        "whiskey", "hiking", "history"
      ],
      "user": {
        "id": "1",
        "fullName": "Brenda Storer",
        "userProfileUrl": "",
        "profilePhoto": "" 
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
              "ratingComment": "Amazing views"
            },
            {
              "name": "The Albanach",
              "address": "",
              "type": "bar/restaurant",
              "rating": 10,
              "ratingComment": "Great whiskey selection."
            }
          ]
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
      "endDate": "20170831",
      "coverPhoto": "",
      "interests": [
        "urban", "foodie", "museums"
      ],
      "user": {
        "id": "1",
        "fullName": "Brenda Storer",
        "userProfileUrl": "",
        "profilePhoto": "" 
      },
      "locations": [
        {
          "name": "New York",
          "country": "USA",
          "sites": [
            {
              "name": "Empire State Building",
              "address": "",
              "type": "historic site",
              "rating": 8,
              "ratingComment": "Decent View. Cool art deco design."
            },
            {
              "name": "Kashkaval",
              "address": "",
              "type": "bar/restaurant",
              "rating": 10,
              "ratingComment": "Fondue is really good."
            }
          ]
        }
      ]
    }
  ]
};

function getTrips(callbackFn) {
  setTimeout(function(){ 
    callbackFn(MOCK_TRIPS)
  }, 100);
}

function renderTripList(trip) {
  const tripTemplate = (
  `
    <li>
      <h2>${trip.title}</h2>
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