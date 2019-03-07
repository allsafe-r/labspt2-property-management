const express = require('express');
const router = express.Router();
const db = require('../knexfile.js');

// Get all properties
router.get('/properties', (req, res) => {
	db('properties')
		.then((property) => {
			res.status(200).json(property);
		})
		.catch((err) => {
			res.status(500).json({ error: `${err}` });
		});
});

// Get a property
router.get('/properties/:houseId', (req, res) => {
	const { id } = req.params;
	db('house_properties')
		.where('properties.houseId', id)
		.first()
		.then((property) => {
			if (!property) {
				res.status(401).json({ error: 'The specified property does not exist.' });
				return;
			} else res.status(200).json(property);
		})
		.catch((err) => res.status(500).json(err));
});

// create property
router.post('/properties/add', (req, res) => {
	const {
		propertyName,
		propertyAddress,
		propertyCity,
		propertyState,
		propertyZipcode,
		maxOccupants,
		bedrooms,
		bathrooms,
		square_footage,
		yearBuilt,
		uid
	} = req.body;
	const property = {
		propertyName: propertyName,
		propertyAddress: propertyAddress,
		propertyCity: propertyCity,
		propertyState: propertyState,
		propertyZipcode: propertyZipcode,
		maxOccupants: maxOccupants,
		bedrooms: bedrooms,
		bathrooms: bathrooms,
		sqFt: sqFt,
		yearBuilt: yearBuilt
	};
	db
		.insert(property)
		.into('properties')
		.then((houseId) => {
			res.status(201).json(houseId);
		})
		.catch((err) => {
			res.status(500).json({ error: `${err}` });
		});
});

// edit property
router.put('/properties/:houseId', (req, res) => {
	const { houseId } = req.params;

	db('properties')
		.where('houseId', houseId)
		.update(property)
		.then((property) => {
			res.status(200).json(property);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ error: `${err}` });
		});
});

// delete property
router.delete('/properties/:houseId', (req, res) => {
	const { houseId } = req.params;
	db('properties')
		.where('houseId', houseId)
		.del()
		.then((property) => {
			if (property === 0) {
				res.status(505).json({ message: 'Sorry, this property does not exist.' });
				return;
			}
			res.status(200).json(property);
		})
		.catch((err) => {
			res.status(500).json({ error: `${err}` });
		});
});

module.exports = router;
