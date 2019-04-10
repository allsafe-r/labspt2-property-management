const express = require("express");
const router = express.Router();
const db = require("../data/helper/billingHistory");

// Get all properties
router.get("/", (req, res) => {
  db.getBilling()
    .then(billing => res.status(200).json(billing))
    
});

// Get a property
router.get("/:propertyId", (req, res) => {
  const { propertyId } = req.params;
  db.findByBillingId(propertyId)
    .then(properties => {
      if (properties) {
        res.status(200).json(properties);
      } else {
        res
          .status(404)
          .json({ error: "The specified property does not exist." });
      }
    })
    .catch(err => {
      res.status(500).json({ error: `${err}` });
    });
});


module.exports = router;