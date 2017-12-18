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
        console.log("   username: ", account.username);
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
          res.should.have.status(201);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.include.keys('id', 'days', 'description', 'media', 'public', 'title', 'startDate', 'endDate', 'tripUrl');
          res.body.id.should.not.be.null;
          res.body.should.deep.equal(Object.assign(newTrip, {id: res.body.id, tripUrl: res.body.tripUrl, days: res.body.days}));
        });
    });

    it('should list trips on GET', function() {
      return chai.request(app)
        .get('/trips')
        .then(function(res) {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('array');
          res.body.length.should.be.at.least(1);
          const expectedKeys = ['id', 'days', 'description', 'interests', 'media', 'public', 'title'];
          res.body.forEach(function(item) {
            item.should.be.a('object');
            item.should.include.keys(expectedKeys);
          });
        });
    });

    it('should update items on PUT', function() {
      const updateData = {
        title: 'My Awesome Trip to Italy',
        public: false
      };
      return chai.request(app)
        .get('/trips')
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
        .get('/trips')
        .then(function(res) {
          return chai.request(app)
            .delete(`/trips/${res.body[0].id}`);
        })
        .then(function(res) {
          res.should.have.status(204);
        });
    });
  });
});