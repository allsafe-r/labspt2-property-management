exports.up = function(knex, Promise) {
	return knex.schema.createTable('alerts', (t) => {
		t.increments();
		t.integer('houseId').notNullable().references('houseId').inTable('properties');
		t.text('alert').notNullable();
	});
};
exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('alerts');
};
