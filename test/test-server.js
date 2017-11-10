const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const {app} = require('../server');

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