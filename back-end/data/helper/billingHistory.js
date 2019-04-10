const db = require('../../knex');

module.exports = {
	getBilling,
	findByBillingId
};

function getBilling() {
	return db('billing');
}

function findByBillingId(propertyId) {
	return db('billing').where({ propertyId });
}