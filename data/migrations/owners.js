exports.up = function(knex, Promise) {
	return knex.schema.createTable('owners', (table) => {
		table.increments();
		table.string('name', 64).notNullable();
		table.string('email', 32).notNullable();
		table.string('phone', 32).notNullable();
		table.text('address', 256).notNullable();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('owners');
};
