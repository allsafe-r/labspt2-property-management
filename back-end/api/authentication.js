const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../data/helper/tenants');
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
  
  db
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
})

router.post('/login', (req, res, next) => {
	const creds = req.body;
	db
		.findByEmail(creds.email)
		.then((users) => {
			user = users[0];

			console.log(user);
			if (user && bcrypt.compareSync(creds.password, user.password)) {
				const token = generateToken(user);
				// console.log(token);
				res.json({
					Welcome: user.firstName,
					userId: user.id,
					token,
					isAdmin: user.isAdmin
				});
			} else {
				res.status(401).json({ message: 'Not Authorized' });
			}
		})
		.catch((err) => {
			next('h500', err);
		});
});

module.exports = router;
