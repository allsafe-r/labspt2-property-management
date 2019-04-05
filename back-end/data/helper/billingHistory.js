const db = require('../../knex');

module.exports = {
	getBilling
};

function getBilling() {
	return db('properties');
}