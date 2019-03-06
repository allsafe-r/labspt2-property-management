exports.seed = function(knex, Promise) {
	return knex('users').del().then(function() {
		return knex('users').insert([
			{
				name: 'Lee',
				is_admin: 'hardCodePassword1',
				email: 'lee@tenantly.com',
				phone: '203-555-1234',
				displayName: 'Lee',
				emailSubscribe: false,
				textSubscribe: false,
				residence_id: 1,
				application: ''
			},
			{
				name: 'Matt',
				is_admin: 'hardCodePassword1',
				email: 'matt@tenantly.com',
				phone: '203-555-1234',
				displayName: 'Matt',
				emailSubscribe: false,
				textSubscribe: false,
				residence_id: 1,
				application: ''
			},
			{
				name: 'Victor',
				is_admin: 'hardCodePassword1',
				email: 'victor@tenantly.com',
				phone: '203-555-1234',
				displayName: 'Victor',
				emailSubscribe: false,
				textSubscribe: false,
				residence_id: 1,
				application: ''
			},
			{
				name: 'Kyle',
				is_admin: 'hardCodePassword1',
				email: 'kyle@tenantly.com',
				phone: '203-555-1234',
				displayName: 'Kyle',
				emailSubscribe: false,
				textSubscribe: false,
				residence_id: 1,
				application: ''
			}
		]);
	});
};
