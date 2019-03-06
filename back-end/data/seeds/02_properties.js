exports.seed = function(knex, promise) {
	return knex('properties').del().then(function() {
		return knex('properties').insert([
			{
				propertyName: 'Incubators Galore',
				propertyAddress: '123 Fake Ave',
				propertyCity: 'San Francisco',
				propertyState: 'CA',
				propertyZipcode: '94016',
				owner: '4',
				tenant1: 1,
				tenant2: 4,
				maxOccupants: 5,
				sqFt: 2200,
				bedrooms: 3,
				bathrooms: 2,
				yearBuilt: 1975
			},
			{
				propertyName: 'The White House',
				propertyAddress: '1600 Pennsylvania Ave NW',
				propertyCity: 'Washington',
				propertyState: 'DC',
				propertyZipcode: '20500',
				owner: 1,
				tenant1: 2,
				tenant2: 3,
				maxOccupants: 30,
				sqFt: 55000,
				bedrooms: 11,
				bathrooms: 11,
				yearBuilt: 1792
			}
		]);
	});
};
