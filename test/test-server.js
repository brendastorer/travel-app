const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const {app, runServer, closeServer} = require('../server');

chai.use(chaiHttp);

describe('Show site at root', function() {
  it('should display homepage', function() {
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
        const expectedKeys = ['id', 'title', 'description', 'media', 'public'];
        res.body.forEach(function(item) {
          item.should.be.a('object');
          item.should.include.keys(expectedKeys);
        });
      });
  });

  it('should add a trip on POST', function() {
    const newTrip = {
      days: [
        {
          "calendarDate": "20180830",
          "diaryEntry": "Fixie pabst gentrify, beard pug iPhone leggings lyft thundercats master cleanse jean shorts prism shaman craft beer poutine.",
          "travelDetails": "",
          "locations": [
            {
              "name": "Florence",
              "country": "Italy",
              "sites": ""
            }
          ]
        },
        {
          "calendarDate": "20180831",
          "diaryEntry": "Cold-pressed yuccie YOLO williamsburg cronut jianbing before they sold out man braid.",
          "travelDetails": "",
          "locations": [
            {
              "name": "Florence",
              "country": "Italy",
              "sites": ""
            }
          ]
        }
      ],
      description: 'I will visit Italy in 2018!', 
      endDate: '20150622',
      interests: ["music", "pasta", "coffee"],
      media: [
        {
          file: "https://media-cdn.tripadvisor.com/media/photo-s/0f/4a/fe/6e/edinburgh-from-calton.jpg",
          caption: "Edinburgh"
        }
      ],
      public: true,
      startDate: '20150621',
      title: 'My Trip to Italy', 
      tripUrl: 'http://brendastorer.com'
    };
    return chai.request(app)
      .post('/trips')
      .send(newTrip)
      .then(function(res) {
        res.should.have.status(201);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.include.keys('id', 'days', 'description', 'media', 'public', 'title', 'startDate', 'endDate');
        res.body.id.should.not.be.null;
        res.body.should.deep.equal(Object.assign(newTrip, {id: res.body.id}));
      });
  });
});