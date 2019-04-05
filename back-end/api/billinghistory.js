const express = require("express");
const router = express.Router();
const db = require("../data/helper/billingHistory");

// Get all properties
router.get("/", (req, res) => {
  db.getProperties()
    .then(properties => res.status(200).json(properties))
    .catch(err => {
      res.status(500).json({ error: `${err}` });
    });
});

module.exports = router;