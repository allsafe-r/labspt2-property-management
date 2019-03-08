exports.seed = function(knex, Promise) {
	return knex('users').del().then(function() {
		return knex('users').insert([
			{
				name: 'Lee',
				isAdmin: true,
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
				isAdmin: true,
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
				isAdmin: true,
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
				isAdmin: false,
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
