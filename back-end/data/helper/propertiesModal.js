const db = require('../../knex');

module.exports = {
	getPropertiesByOwner,
	getPropertiesByTen1,
	getPropertiesByTen2,
	createProperty,
	deleteProperty,
	getProperty,
	editProperty
};

function getPropertiesByTen1(id) {
	return db('property').then((res) => res.filter((prop) => prop.tenant1 == id));
}

function getPropertiesByTen2(id) {
	return db('properties').then((res) => res.filter((prop) => prop.tenant2 == id));
}

function getPropertiesByOwner(id) {
	return db('properties').then((res) => res.filter((prop) => prop.owner == id));
}

function getProperty(id) {
	return db('properties').where({ id }).first();
}

function createProperty(property) {
	return db('properties').insert(property, 'id');
}

function deleteProperty(id) {
	return db('properties').where({ id }).del();
}

function editProperty(id, property) {
	return db('properties').where({ id }).update(property, 'id');
}
