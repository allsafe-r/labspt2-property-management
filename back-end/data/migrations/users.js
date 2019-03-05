exports.up = function(knex, Promise) {
	return knex.schema.createTable('users', (table) => {
		table.increments('userId');
		table.string('uId');
		table.string('firstName').notNullable();
		table.string('middleName').notNullable();
		table.string('lastName').notNullable();
		table.boolean('is_admin').notNullable();
		table.string('email').notNullable().unique();
		table.integer('phone').notNullable();
		table.string('displayName').notNullable();
		table.boolean('forgetPassword').notNullable.defaultTo(false);
		table.boolean('emailSubscribe').notNullable.defaultTo(false);
		table.boolean('textSubscribe').notNullable.defaultTo(false);
		// table.integer('residence_id').references('id').inTable('properties');
		// table.text('application');
	});
};
exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('users');
};
