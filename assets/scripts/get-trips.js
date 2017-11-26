function getTrips() {
  $.getJSON(TRIPS_URL, function(data) {
    // use the first trip for now on the trip_static page
    const selectedTrip = data[0];
    getAndDisplayTrip(selectedTrip);
    
    // show all trips on trips page
    data.map(function(trip) {
      renderTripList(trip);
    });
  });
}

$(function() {
  getTrips();
});