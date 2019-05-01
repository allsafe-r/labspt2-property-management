exports.up = function(knex, Promise) {
	return knex.schema.createTable('users', (table) => {
		table.increments();
		table.string('email').notNullable().unique();
		table.text('password').notNullable();
		table.text('firstName').notNullable();
		table.text('lastName').notNullable();
		table.boolean('isAdmin').notNullable().defaultTo(false);
		table.string('phone').notNullable();
		table.decimal('cost').notNullable();
		table.boolean('emailSubscribe').notNullable().defaultTo(false);
		table.boolean('textSubscribe').notNullable().defaultTo(false);
		table.text('application');
	});
};
exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('users');
};
