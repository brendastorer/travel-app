const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');

const should = chai.should();
const {app, runServer, closeServer} = require('../server');
const {TEST_DATABASE_URL} = require('../config');
const Account = require("../models/accountModel.js");

chai.use(chaiHttp);

function tearDownDb() {
  console.warn('Deleting database');
  return mongoose.connection.dropDatabase();
}

describe('Accounts', function() {
  before(function() {
    return runServer(TEST_DATABASE_URL);
  });

  after(function() {
    return tearDownDb();
    return closeServer();
  });

  describe('Users', function() {
    it('should register a new account', function() {
      const account = new Account({
        username: '12345',
        password: 'testy'
      });

      account.save((error) => {
        if (error) console.log('error' + error.message);
        else console.log('no error');
      });
    });

    it('should find a user by username', (done) => {
      Account.findOne({ username: '12345' }, (err, account) => {
        account.username.should.eql('12345');
        done();
      });
    });
  });

  describe('Trips', function() {
    it('should add a trip on POST', function() {
      const newTrip = {
        description: 'I will visit Italy in 2018!', 
        endDate: '2015-06-22T00:00:00.000Z',
        interests: ["music", "pasta", "coffee"],
        media: [],
        public: true,
        startDate: '2015-06-21T00:00:00.000Z',
        title: 'My Trip to Italy'
      };
      return chai.request(app)
        .post('/trips')
        .send(newTrip)
        .then(function(res) {
          res.should.be.html;
          res.should.redirect;
        });
    });

    it('should list trips on GET', function() {
      return chai.request(app)
        .get('/trips')
        .then(function(res) {
          res.should.have.status(200);
          res.should.be.html;
        });
    });

    it('should add a location to an existing trip', function() {
      return chai.request(app)
        .get('/trips/json')
        .then(function(res) {
          const firstTrip = res.body[0].id;
          const firstDayofTrip = res.body[0].days[0].id;
          const newLocation = {
            id: firstTrip,
            city: "Florence",
            country: "Italy",
            firstDayofTrip: "on"
          };
          return chai.request(app)
            .post(`/trips/${firstTrip}`)
            .send(newLocation)
            .then(function(res) {
              res.should.be.html;
              res.should.redirect;
            });
      });
    });

    it('should update items on PUT', function() {
      const updateData = {
        title: 'My Awesome Trip to Italy',
        public: false
      };
      return chai.request(app)
        .get('/trips/json')
        .then(function(res) {
          updateData.id = res.body[0].id;
          return chai.request(app)
            .put(`/trips/${updateData.id}`)
            .send(updateData)
        })
        .then(function(res) {
          res.should.have.status(204);
        });
    });

    it('should delete trips on DELETE', function() {
      return chai.request(app)
        .get('/trips/json')
        .then(function(res) {
          const firstTrip = res.body[0].id;
          return chai.request(app)
            .delete(`/trips/${firstTrip}`);
        })
        .then(function(res) {
          res.should.have.status(204);
        });
    });
  });
});