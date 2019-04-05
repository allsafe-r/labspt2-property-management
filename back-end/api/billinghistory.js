const express = require("express");
const router = express.Router();
const db = require("../data/helper/billingHistory");

// Get all properties
router.get("/", (req, res) => {
  db.getBilling()
    .then(billing => res.status(200).json(billing))
    
});



module.exports = router;