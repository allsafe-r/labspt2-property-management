require('dotenv').config();

exports.seed = function(knex, Promise) {
	return knex('users').del().then(function() {
		return knex('users').insert([
			{
				email: 'lee@tenantly.com',
				firstName: 'Lee',
				lastName: 'Secret',
				password: process.env.password,
				isAdmin: true,
				phone: '203-555-1234',
				cost: 75000,
				emailSubscribe: false,
				textSubscribe: false,
				application: ''
			},
			{
				email: 'matt@tenantly.com',
				firstName: 'Matt',
				lastName: 'Secret',
				password: process.env.password,
				isAdmin: true,
				phone: '203-555-1234',
				cost: 80000,
				emailSubscribe: false,
				textSubscribe: false,
				application: ''
			},
			{
				email: 'victor@tenantly.com',
				firstName: 'Victor',
				lastName: 'Secret',
				password: process.env.password,
				isAdmin: true,
				phone: '203-555-1234',
				cost: 100000,
				emailSubscribe: false,
				textSubscribe: false,
				application: ''
			},
			{
				email: 'kyle@tenantly.com',
				firstName: 'Kyle',
				lastName: 'Secret',
				password: process.env.password,
				isAdmin: false,
				phone: '203-555-1234',
				cost: 86500,
				emailSubscribe: false,
				textSubscribe: false,
				application: ''
			}
		]);
	});
};
