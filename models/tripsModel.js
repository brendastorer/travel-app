const uuid = require('uuid');

function StorageException(message) {
  this.message = message;
  this.name = "StorageException";
}

const Trips = {
  create: function(title, description) {
    console.log("Creating new trip...")
    const trip = {
      id: uuid.v4(),
      title: title,
      description: description
    };
    this.trips[trip.id] = trip;
    return trip;
  },
  get: function() {
    console.log('Retrieving trips...');
    return Object.keys(this.trips).map(key => this.trips[key]);
  }
}

function createTrips() {
  const storage = Object.create(Trips);
  storage.trips = [];
  return storage;
}

module.exports = {Trips: createTrips()};