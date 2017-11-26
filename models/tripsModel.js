const uuid = require('uuid');

function StorageException(message) {
  this.message = message;
  this.name = "StorageException";
}

const Trips = {
  create: function(
    days,
    description, 
    endDate, 
    interests,
    media,
    public, 
    startDate, 
    title, 
    tripUrl
    ) {

    console.log("Creating new trip...")

    const trip = {
      id: uuid.v4(),
      days: days,
      description: description,
      endDate: endDate,
      interests: interests,
      media: media,
      public: public || true,
      startDate: startDate,
      title: title,
      tripUrl: tripUrl
    };
    this.trips[trip.id] = trip;
    return trip;
  },
  get: function(id = null) {
    // if id passed in, retrieve single trip,
    // otherwise send all trips.
    if (id !== null) {
      return this.trips.find(trip => trip.id === id);
    }

    return Object.keys(this.trips).map(key => this.trips[key]);
    // return this.posts.sort(function(a, b) {
    //   return b.publishDate - a.publishDate
    // });
  }
}

function createTrips() {
  const storage = Object.create(Trips);
  storage.trips = [];
  return storage;
}

module.exports = {Trips: createTrips()};