const db = require('../../knex');

module.exports = {
	createOwner,
	findByOwnerId,
	findByOwnerName,
	getOwners,
	editOwner
};

function createOwner(owner) {
	return db('owners').insert(owner, 'id');
}

function findByOwnerName(name) {
	return db('owners').where({ name }).first();
}

function findByOwnerId(id) {
	return db('owners').where({ id }).first();
}

function editOwner(id, owner) {
	return db('owners').where({ id }).update(owner, 'id');
}

function getOwners() {
	return db('owners');
}
