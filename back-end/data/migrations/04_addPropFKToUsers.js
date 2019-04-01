exports.up = function(knex, Promise) {
	return knex.schema.table('users', function(table) {
		table.integer('residence_id').references('houseId').inTable('properties');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.table('users', function(table) {
		table.dropColumn('residence_id');
	});
};
