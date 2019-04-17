require('dotenv').config();

exports.seed = function(knex, Promise) {
	return knex('users').del().then(function() {
		return knex('users').insert([
			{
				firstName: 'Lee',
				lastName: 'Secret',
				password: process.env.password,
				isAdmin: true,
				email: 'lee@tenantly.com',
				phone: '203-555-1234',
				emailSubscribe: false,
				textSubscribe: false,
				application: ''
			},
			{
				firstName: 'Matt',
				lastName: 'Secret',
				password: process.env.password,
				isAdmin: true,
				email: 'matt@tenantly.com',
				phone: '203-555-1234',
				emailSubscribe: false,
				textSubscribe: false,
				application: ''
			},
			{
				firstName: 'Victor',
				lastName: 'Secret',
				password: process.env.password,
				isAdmin: true,
				email: 'victor@tenantly.com',
				phone: '203-555-1234',
				emailSubscribe: false,
				textSubscribe: false,
				application: ''
			},
			{
				firstName: 'Kyle',
				lastName: 'Secret',
				password: process.env.password,
				isAdmin: false,
				email: 'kyle@tenantly.com',
				phone: '203-555-1234',
				emailSubscribe: false,
				textSubscribe: false,
				application: ''
			}
		]);
	});
};
