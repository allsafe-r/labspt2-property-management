exports.seed = function(knex, promise) {
	return knex('workOrders').del().then(function() {
		return knex('workOrders').insert([
			{
				property: 1,
				tenant: 2,
				description: 'Air conditioner does not blow cold air!',
				phone: '415-555-6132',
				unsupervisedEntry: true,
				status: 'Pending'
			},
			{
				property: 2,
				tenant: 3,
				description: 'None of the toilets flush!',
				phone: '202-555-6132',
				unsupervisedEntry: true,
				status: 'Pending'
			}
		]);
	});
};
