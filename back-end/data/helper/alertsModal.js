const db = require('../../knex');

module.exports = {
	getAlerts,
	getAlert,
	createAlert,
	deleteAlert,
	editAlert
};

function getAlerts() {
	return db('alerts');
}

function getAlert(id) {
	return db('alerts').where({ id }).first();
}

function createAlert(alert) {
	return db('alerts').insert(alert, 'id');
}

function deleteAlert(id) {
	return db('alerts').where({ id }).del();
}

function editAlert(id, alert) {
	return db('alerts').where({ id }).update(alert, 'id');
}
