exports.up = function(knex, Promise) {
	return knex.schema.createTable('workOrders', (table) => {
		table.increments();
		table.integer('property').notNullable().references('id').inTable('properties');
		table.integer('tenant').notNullable().references('id').inTable('tenants');
		table.text('description').notNullable();
		table.string('phone').notNullable();
		table.boolean('unsupervisedEntry').notNullable();
		table.string('status').notNullable().defaultTo('Incomplete');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('workOrders');
};
