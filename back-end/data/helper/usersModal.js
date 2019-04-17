const db = require('../../knex');

module.exports = {
	createUser,
	findByUserId,
	findByEmail,
	getAdmins,
	editUser,
	getTenants,
	deleteUser,
	getUsers
};

function createUser(user) {
	return db('users').insert(user, 'id');
}

function findByEmail(email) {
	return db('users').where({ email });
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

function getUsers() {
	return db('users');
}

function getTenants() {
	return db('users').then((res) => res.filter((user) => user.isAdmin == false));
}

function deleteUser(id) {
	return db('users').where({ id }).first().del();
}
