const db = require('../../knex');

module.exports = {
	createTenant,
	findByTenantId,
	findByTenantName,
	getTenants,
	editTenant
};

function createTenant(tenant) {
	return db('tenants').insert(tenant, 'id');
}

function findByTenantName(name) {
	return db('tenants').where({ name }).first();
}

function findByTenantId(id) {
	return db('tenants').where({ id }).first();
}

function editTenant(id, tenant) {
	return db('tenants').where({ id }).update(tenant, 'id');
}

function getTenants() {
	return db('tenants');
}
