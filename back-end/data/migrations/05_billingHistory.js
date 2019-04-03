exports.up = function(knex, Promise) {
	return knex.schema.createTable('Billing', (table) => {
		table.increments();
        table.integer('propertyID').notNullable().references('houseId').inTable('properties');
        table.integer('propertyName').notNullable().references('propertyName').inTable('properties');
		table.integer('date').notNullable();
		table.string('amount').notNullable();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('Billing');
};
