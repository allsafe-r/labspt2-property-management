const request = require('supertest');
const expect = require('chai').expect;
const app = ('https://tenantly-back.herokuapp.com');

// Testing Get Request for Users
describe('Users Route Tests', () => {
    describe('get /', () => {
        it('responds with 200', function(done) {
            request(app)
            .get('/workorders/')
            .expect(200)
            .end(done);
        }) 
     });

     

});