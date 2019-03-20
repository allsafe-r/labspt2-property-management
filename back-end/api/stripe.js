// const stripe = require('stripe')('sk_test_H5m1BImFjTdc7oLig2dKoq5A');

// const customer = await stripe.customers.create({
//   email: 'customer@example.com'
// });

const express = require('express');
const db = require('../data/dbConfig');
const router = express.Router();

router.use(express.json());

const postStripeCharge = res => (stripeErr, stripeRes) => {
  if (stripeErr) {
      res.status(500).send({ error: stripeErr });
  } else {
    console.log('works');
    res.status(200).send({ success: stripeRes });
  }
}


module.exports = router;
  