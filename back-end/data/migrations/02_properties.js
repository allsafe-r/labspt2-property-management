exports.up = function(knex, Promise) {
	return knex.schema.createTable('properties', (table) => {
		table.increments('houseId');
		table.string('propertyName').notNullable().unique();
		table.string('propertyAddress').notNullable();
		table.string('propertyCity').notNullable();
		table.string('propertyState').notNullable();
		table.string('propertyZipcode').notNullable();
		table.integer('owner').notNullable().references('id').inTable('users');
		table.integer('tenant1').notNullable().references('id').inTable('users');
		table.integer('tenant2').references('id').inTable('users');
		table.integer('maxOccupants').notNullable().defaultTo(2);
		table.integer('sqFt').notNullable();
		table.integer('bedrooms').notNullable();
		table.integer('bathrooms').notNullable();
		table.integer('yearBuilt').notNullable();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('properties');
};
