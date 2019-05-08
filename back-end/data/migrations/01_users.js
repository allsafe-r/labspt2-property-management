exports.up = function(knex, Promise) {
	return knex.schema.createTable('users', (table) => {
		table.increments();
		table.string('email').notNullable().unique();
		table.text('password').notNullable();
		table.text('firstName').notNullable();
		table.text('lastName').notNullable();
		table.boolean('isAdmin').notNullable().defaultTo(false);
		table.string('phone').notNullable();
		table.decimal('cost').notNullable().defaultTo(0);
		table.boolean('emailSubscribe').notNullable().defaultTo(false);
		table.boolean('textSubscribe').notNullable().defaultTo(false);
		table.text('application');
		table.string('property').notNullable();
	});
};
exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('users');
};
