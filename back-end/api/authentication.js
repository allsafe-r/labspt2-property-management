const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const dbt = require('../data/helper/tenants');
const dbl = require('../data/helper/landlords');
const { generateToken } = require('../auth/bcrypt');

function validate(req, res, next) {
  const { email, password } = req.body
  if (!email) {
    return res.status(400).json('Missing Email!')
  }

  next()
}

router.post('/register', validate, (req, res) => {
	const creds = req.body;
	const hash = bcrypt.hashSync(creds.password, 14);
	creds.password = hash;
  if(creds.type === "tenant"){
  dbt
    .getByEmail(creds.email)
    .then(tenant => {
      if (tenant) {
        res.status(400).json('Email already exists.')
      } else {
        db
        .create(creds)
        .then(() => {
          res.status(201).json('Tenant has been created successfully.');
        })
        .catch(err => res.status(500).json({ error: err }));
      }
    })
		.catch(err => res.status(500).json({ error: err }));
	} else {
		dbl
    .getByEmail(creds.email)
    .then(landlord => {
      if (landlord) {
        res.status(400).json('Email already exists.')
      } else {
        db
        .create(creds)
        .then(() => {
          res.status(201).json('Tenant has been created successfully.');
        })
        .catch(err => res.status(500).json({ error: err }));
      }
    })
		.catch(err => res.status(500).json({ error: err }));
	}
})

router.post('/login', (req, res, next) => {
	const creds = req.body;
	if(creds.type==="tenant"){
	dbt
		.findByEmail(creds.email)
		.then((tenants) => {
			tenant = tenants[0];

			console.log(user);
			if (tenant && bcrypt.compareSync(creds.password, user.password)) {
				const token = generateToken(tenant);
				// console.log(token);
				res.json({
					Welcome: tenant.firstName,
					userId: tenant.id,
					token,
					isAdmin: tenant.isAdmin
				});
			} else {
				res.status(401).json({ message: 'Not Authorized' });
			}
		})
		.catch((err) => {
			next('h500', err);
		});

	} else {
		dbl
		.findByEmail(creds.email)
		.then((landlords) => {
			landlord = landlords[0];

			console.log(landlord);
			if (landlord && bcrypt.compareSync(creds.password, landlord.password)) {
				const token = generateToken(landlord);
				// console.log(token);
				res.json({
					Welcome: landlord.firstName,
					userId: landlord.id,
					token,
					isAdmin: landlord.isAdmin
				});
			} else {
				res.status(401).json({ message: 'Not Authorized' });
			}
		})
		.catch((err) => {
			next('h500', err);
		});
	}
});

module.exports = router;
