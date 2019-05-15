const db = require('../../knex');

module.exports = {
	create,
	getById,
	getByEmail,
	editById,
  get,
	deleteById,
};

function create(tenant) {
	return db('tenants').insert(tenant);
}

function getByEmail(email) {
	return db('tenants').where({ email });
}

function getById(id) {
	return db('tenants').where({ id }).first();
}

function editById(id, tenant) {
	return db('tenants').where({ id }).update(tenant);
}

function get() {
	return db('tenants');
}

function deleteById(id) {
	return db('tenants').where({ id }).first().del();
}
