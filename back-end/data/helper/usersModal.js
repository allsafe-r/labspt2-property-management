const db = require('../../knex');

module.exports = {
	createUser,
	findByUserId,
	findByUserName,
	getAdmins,
	editUser,
	getTenant
};

function createUser(user) {
	return db('users').insert(user, 'id');
}

function findByUserName(name) {
	return db('users').where({ name }).first();
}

function findByUserId(id) {
	return db('users').where({ id }).first();
}

function editUser(id, updated) {
	return db('users').where({ id }).update(updated, 'id');
}

function getAdmins() {
	return db('users').then((res) => res.filter((user) => user.isAdmin == true));
}

function getTenant() {
	return db('users').then((res) => res.filter((user) => user.isAdmin == false));
}
