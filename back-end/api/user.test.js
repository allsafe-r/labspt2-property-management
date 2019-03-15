const request = require('supertest');
const expect = require('chai').expect;
const app = ('https://tenantly-back.herokuapp.com');


// Testing Get Request for Users
describe('Users Route Tests', () => {
    describe('get /', () => {
        it('responds with 200', function(done) {
            request(app)
            .get('/')
            .expect(200)
            .end(done);
        }) 
     });

     //  Testing Get Request for Users by ID
     describe('Get Users by ID', () => {
        it('responds with 200', function(done) {
            request(app)
            .get('/users/2')
            .expect(200)
            .end(done);
        })
    });

    //  Testing Get Request for Users that are Admin
    describe('Get Users that are Admin', () => {
        it('responds with 200', function(done) {
            request(app)
            .get('/users/admins')
            .expect(200)
            .end(done);
        })
    });
   
})