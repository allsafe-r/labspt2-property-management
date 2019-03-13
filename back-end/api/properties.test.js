const request = require('supertest');


const server = require('./server.js');
const db = require('../data/dbConfig.js');

describe('Property Route Tests', () => {
    describe('get /', () => {
        it('responds with 200', async () => {
            const response = await request(server)
            .get('/');

            expect(response.status).toBe(200);
        }) 
     });

     describe('Get Property by ID', () => {

        afterEach(async () => {
            await db('properties').truncate();
        })

        it('responds with 200', async () => {
            const response = await request(server)
            .get('/');

            expect(response.status).toBe(200);
        })
    })

});