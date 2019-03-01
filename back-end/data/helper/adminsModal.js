const db = require('../../knex');

module.exports = {
	createAdmin,
	findByAdminId,
	findByAdminUserName,
	getAdmins,
	editAdmin
};

function createAdmin(admin) {
	return db('admins').insert(admin, 'id');
}

function findByAdminUserName(name) {
	return db('admins').where({ name }).first();
}

function findByAdminId(id) {
	return db('admins').where({ id }).first();
}

function editAdmin(id, admin) {
	return db('admins').where({ id }).update(admin, 'id');
}

function getAdmins() {
	return db('admins');
}
