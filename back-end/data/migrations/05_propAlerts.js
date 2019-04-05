exports.up = function(knex, Promise) {
	return knex.schema.createTable('alerts', (table) => {
		table.increments();
		table.integer('houseId').notNullable().references('houseId').inTable('properties');
		table.text('alert').notNullable();
	});
};
exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('alerts');
};
