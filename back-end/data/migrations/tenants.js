exports.up = function(knex, Promise) {
	return knex.schema.createTable('tenants', (table) => {
		table.increments();
		table.integer('property').notNullable().references('id').inTable('properties');
		table.string('name', 64).notNullable();
		table.string('email', 32).notNullable();
		table.string('phone', 32).notNullable();
		table.text('address', 256).notNullable();
		table.boolean('emailSub').defaultTo(false);
		table.boolean('textSub').defaultTo(false);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('tenants');
};
