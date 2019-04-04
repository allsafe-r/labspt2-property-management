exports.seed = function(knex, promise) {
	return knex('billing').del().then(function() {
		return knex('billing').insert([
			{
                propertyID: 1,
                propertyName: 'Incubators Galore',
                date: 1550625630,
				amount: '$242'
			},
			{
                propertyID: 2,
                propertyName: 'The White House',
				date: 1550626830,
				amount: '$432'
            },
            {
                propertyID: 1,
                propertyName: 'Incubators Galore',
                date: 1550628701,
				amount: '$444'
			},
			{
                propertyID: 2,
                propertyName: 'The White House',
				date: 1550626021,
				amount: '$305'
			}
		]);
	});
};
