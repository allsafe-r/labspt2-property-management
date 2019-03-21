const db = require('../../knex');

module.exports = {
	createWorkOrder,
	findWorkOrderByTenant,
	findByWorkOrderId,
	getWorkOrders,
	editWorkOrder,
	findWorkOrderByPropertyId,
	deleteWorkOrder
};

	function createWorkOrder(order) {
	return db('workOrders').insert(order, 'id');
}

function findWorkOrderByPropertyId(id) {
	return db('workOrders').then((res) => res.filter((order) => order.property == id));
}

function findWorkOrderByTenant(name) {
	return db('workOrders').then((res) => res.filter((order) => order.name == name));
}

	function findByWorkOrderId(id) {
	return db('workOrders').then((res) => res.filter((res) => res.id == id));
}

function editWorkOrder(id, order) {
	return db('workOrders').where({ id }).update(order, 'id');
}

function getWorkOrders() {
	return db('workOrders');
}

function deleteWorkOrder(id) {
	return db('workOrders').where({ id }).first().del();
}