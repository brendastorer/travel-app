const TRIPS_URL = '/trips';

function getAndDisplayTrips() {
  console.log('Retrieving trips');
  $.getJSON(TRIPS_URL, function(trips) {
    console.log(trips);
    trips.map(function(trip) {
      console.log(`${trip.title}, ${trip.description}`);
    });
  });
}

$(function() {
  getAndDisplayTrips();
});