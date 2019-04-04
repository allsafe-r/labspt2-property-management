exports.up = function(knex, Promise) {
	return knex.schema.table('properties', function(table) {
		table.specificType('alerts', []);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.table('properties', function(table) {
		table.specificType('alerts', []);
	});
};
