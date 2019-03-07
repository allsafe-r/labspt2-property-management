const db = require('../../knex');

module.exports = {
	getPropertiesByOwner,
	getPropertiesByTen1,
	getPropertiesByTen2,
	getProperties,
	findByPropertyId,
	createProperty,
	deleteProperty,
	getProperty,
	editProperty
};

<<<<<<< HEAD
function getProperties() {
	return db('properties');
}

function findByPropertyId(houseId) {
	return db('properties').where({ houseId }).first();
}

=======
>>>>>>> 73fbda67d72f4baf93cb5b150a0f104696d25a2d
function getPropertiesByTen1(id) {
	return db('property').then((res) => res.filter((prop) => prop.tenant1 == id));
}

function getPropertiesByTen2(id) {
	return db('properties').then((res) => res.filter((prop) => prop.tenant2 == id));
}

function getPropertiesByOwner(id) {
	return db('properties').then((res) => res.filter((prop) => prop.owner == id));
}

function getProperty(houseId) {
	return db('properties').where({ houseId }).first();
}

function createProperty(property) {
	return db('properties').insert(property, 'houseId');
}

function deleteProperty(houseId) {
	return db('properties').where({ houseId }).del();
}

function editProperty(houseId, property) {
	return db('properties').where({ houseId }).update(property, 'houseId');
}
