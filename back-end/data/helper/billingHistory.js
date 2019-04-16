const db = require('../../knex');
screen;
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
