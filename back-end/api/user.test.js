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
   
    //  Testing Get Request for Users that are Tenants
    describe('Get Users that are Tenants', () => {
        it('responds with 200', function(done) {
            request(app)
            .get('/users/tenants')
            .expect(200)
            .end(done);
        })
    });

    // Testing Post function for Users
    describe('Post property', function () {
        it('responds with 201', function(done) {
            request(app)
            .post('/users')
            .send({
                "id": 444,
                "name": "Paco",
                "isAdmin": 0,
                "email": "paco@tenantly.com",
                "phone": "203-555-1234",
                "displayName": "Kyle",
                "emailSubscribe": 0,
                "textSubscribe": 0,
                "residence_id": 1,
                "application": ""
            })
            .expect(201)
            .end(done);
        })
    });

    // Testing Delete for Users
    describe('Delete user', function () {
        it('responds with 202', function(done) {
            request(app)
            .delete('/users/444')
            .expect(202)
            .expect({
                message: 'User deleted'
            })
            .end(done);
        })
    })
})