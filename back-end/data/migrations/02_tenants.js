exports.up = function(knex, Promise) {
	return knex.schema.createTable('tenants', (table) => {
		table.increments();
		table.integer('landlord_id').notNullable().references('id').inTable('landlords');
		table.integer('property_id').notNullable().references('id').inTable('properties');
		table.string('email').notNullable().unique();
		table.text('password').notNullable();
		table.text('firstName').notNullable();
		table.text('lastName').notNullable();
		table.string('phone').notNullable().unique();
		table.decimal('cost').notNullable().defaultTo(0);
		table.boolean('emailSubscribe').notNullable().defaultTo(false);
		table.boolean('textSubscribe').notNullable().defaultTo(false);
		table.text('application');
		
	});
};
exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('tenants');
};
