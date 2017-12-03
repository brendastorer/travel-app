function getTrips() {
  $.getJSON(TRIPS_URL, {
    format: "json"
  })
    .done(function(data) {
      // show all trips on my-trips page
      data.map(function(trip) {
        renderTripList(trip);
      });

      // use the first trip for now on the trip_static page
      const selectedTrip = data[0];
      getAndDisplayTrip(selectedTrip);
  });
}

$(function() {
  getTrips();
});