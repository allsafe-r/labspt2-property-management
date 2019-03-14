const request = require('supertest');
const expect = require('chai').expect;
const app = ('https://tenantly-back.herokuapp.com');
const db = require('../data/dbConfig.js');

describe('Property Route Tests', () => {
    describe('get /', () => {
        it('responds with 200', function(done) {
            request(app)
            .get('/properties')
            .expect(200)
            .end(done);
        }) 
     });

     describe('Get Property by ID', () => {
        it('responds with 200', function(done) {
            request(app)
            .get('/properties/1')
            .expect(200)
            .end(done);
        })
    });

    describe('Post property', function () {
        it('responds with 201', function(done) {
            request(app)
            .post('/properties')
            .send({
            "houseId": 1422,
            "propertyName": "Incubators Galore",
            "propertyAddress": "123 Fake Ave",
            "propertyCity": "San Francisco",
            "propertyState": "CA",
            "propertyZipcode": "94016",
            "owner": 4,
            "tenant1": 1,
            "tenant2": 4,
            "maxOccupants": 5,
            "sqFt": 2200,
            "bedrooms": 3,
            "bathrooms": 2,
            "yearBuilt": 1975
            })
            .expect(201)
            .end(done);
        })
    });

    describe('Put property', function () {
        it('responds with 200', function(done) {
            request(app)
            .put('/properties/1422')
            .send({
            "houseId": 1422,
            "propertyName": "Incubators Galore",
            "propertyAddress": "123 Fake Ave",
            "propertyCity": "San Francisco",
            "propertyState": "CA",
            "propertyZipcode": "94016",
            "owner": 4,
            "tenant1": 1,
            "tenant2": 4,
            "maxOccupants": 5,
            "sqFt": 2200,
            "bedrooms": 6,
            "bathrooms": 3,
            "yearBuilt": 1975
            })
            .expect(200)
            .expect({
                message: 'Property updated.'
            })
            .end(done);
        })
    })

    describe('Delete property', function () {
        it('responds with 202', function(done) {
            request(app)
            .delete('/properties/1422')
            .expect(202)
            .expect({
                message: 'Property deleted.'
            })
            .end(done);
        })
    })

})