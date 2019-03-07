exports.up = function(knex, Promise) {
	return knex.schema.createTable('admins', (table) => {
		table.increments();
		table.string('email').notNullable();
		table.string('phone').notNullable();
		table.string('displayName').notNullable();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('admins');
};
