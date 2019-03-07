exports.seed = function(knex, Promise) {
	return knex('users').del().then(function() {
		return knex('users').insert([
			{
				name: 'Lee',
				password: 'hardCodePassword1',
				is_admin: true,
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
				password: 'hardCodePassword1',
				is_admin: true,
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
				password: 'hardCodePassword1',
				is_admin: true,
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
				is_admin: false,
				password: 'hardCodePassword1',
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
