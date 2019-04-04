const db = require('../../knex');

module.exports = {
	getAlerts,
	findByAlertId,
	getAlert,
	createAlert,
	deleteAlert,
	editAlert,
	findByHouseId
};

function getAlerts() {
	return db('alerts');
}

function findByAlertId(id) {
	return db('alerts').where({ id }).first();
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
