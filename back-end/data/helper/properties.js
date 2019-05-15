const db = require('../../knex');

module.exports = {
	getByLandlordId,
	getByTenantId,
	get,
	getById,
	create,
	deleteById,
	getProperty,
	editById
};

function get() {
	return db('properties');
}

function getById(id) {
	return db('properties').where({ id }).first();
}

function getByTenantId(tenant_id) {
	return db('proptenants').where({ tenant_id }).first();
}

function getByLandlordId(landlord_id) {
	return db('properties').where({ landlord_id })
}

function create(property) {
	return db('properties').insert(property);
}

function deleteById(id) {
	return db('properties').where({ id }).del();
}

function editById(id) {
	return db('properties').where({ id }).update(property);
}
