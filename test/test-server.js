const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const {app, runServer, closeServer} = require('../server');

chai.use(chaiHttp);

describe('Show index.html as root', function() {
  it('should display Hello World', function() {
    const greeting = "Hello world!"

    return chai.request(app)
    .get('/')
    .then(function(res) {
      res.should.have.status(200);
      res.should.be.html;
    });
  });
});

describe('Trips', function() {
  before(function() {
    return runServer();
  });

  after(function() {
    return closeServer();
  });

  it('should list trips on GET', function() {
    return chai.request(app)
      .get('/trips')
      .then(function(res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body.length.should.be.at.least(1);
        const expectedKeys = ['id', 'title', 'description'];
        res.body.forEach(function(item) {
          item.should.be.a('object');
          item.should.include.keys(expectedKeys);
        });
      });
  });

  it('should add a trip on POST', function() {
    const newTrip = {title: 'My Trip to Italy', description: 'I will visit Italy in 2018!'};
    return chai.request(app)
      .post('/trips')
      .send(newTrip)
      .then(function(res) {
        res.should.have.status(201);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.include.keys('id', 'title', 'description');
        res.body.id.should.not.be.null;
        res.body.should.deep.equal(Object.assign(newTrip, {id: res.body.id}));
      });
  });
});