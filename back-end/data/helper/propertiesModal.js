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

function getProperties() {
	return db('properties');
}

function findByPropertyId(houseId) {
<<<<<<< HEAD
	return db('properties').where({ houseId }).first();
=======
  return db("properties")
    .where({ houseId })
    .first();
>>>>>>> 8ea59e4e05b5192c3f7eab097359e311255af96f
}

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
<<<<<<< HEAD
	return db('properties').insert(property, 'houseId');
=======
  return db("properties").insert(property, "houseId");
>>>>>>> 8ea59e4e05b5192c3f7eab097359e311255af96f
}

function deleteProperty(houseId) {
	return db('properties').where({ houseId }).del();
}

function editProperty(houseId, property) {
	return db('properties').where({ houseId }).update(property, 'houseId');
}
