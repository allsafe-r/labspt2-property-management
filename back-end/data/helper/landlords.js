const db = require('../../knex');

module.exports = {
	create,
	getById,
	getByEmail,
	editById,
  get,
	deleteById,
};

function create(landlord) {
	return db('landlord').insert(landlord);
}

function getByEmail(email) {
	return db('landlord').where({ email }).first();
}

function getById(id) {
	return db('landlord').where({ id }).first();
}

function editById(id, landlord) {
	return db('landlord').where({ id }).update(landlord);
}

function get() {
	return db('landlord');
}

function deleteById(id) {
	return db('landlord').where({ id }).first().del();
}