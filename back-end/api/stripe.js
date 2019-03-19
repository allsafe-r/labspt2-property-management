// const stripe = require('stripe')('sk_test_H5m1BImFjTdc7oLig2dKoq5A');

// const customer = await stripe.customers.create({
//   email: 'customer@example.com'
// });

const express = require('express');
const db = require('../data/dbConfig');
const router = express.Router();

router.use(express.json());


const stripeChargeCallback = res => (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  };
  
  router.get('/', (req, res) => {
    res.send({
      message: 'Stripe server is running.',
      timestamp: new Date().toISOString(),
    });
  
router.post("/", (req, res) => {
    const body = {
      source: req.body.token.id,
      amount: req.body.amount,
      currency: "usd"
    };
    stripe.charges.create(body, stripeChargeCallback(res));
});
  return router;
});

module.exports = router;
  