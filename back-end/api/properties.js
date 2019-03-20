const express = require("express");
const router = express.Router();
const db = require("../data/helper/propertiesModal");

// Get all properties
router.get("/", (req, res) => {
  db.getProperties()
    .then(properties => res.status(200).json(properties))
    .catch(err => {
      res.status(500).json({ error: `${err}` });
    });
});

// Get a property
router.get("/:houseId", (req, res) => {
  const { houseId } = req.params;
  db.findByPropertyId(houseId)
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

// create property
router.post("/", (req, res, next) => {
  const newProperty = req.body;
  db.createProperty(newProperty)
    .then(houseIds => {
      db.findByPropertyId(houseIds[0])
        .then(newProperty => {
          res.status(201).json({ newProperty: newProperty.houseId });
        })
        .catch(err => {
          res.status(500).json({ error: `${err}` });
        });
    })
    .catch(err => {
      next("h500", err);
    });
});

// edit property
router.put("/:houseId", (req, res, next) => {
  const { houseId } = req.params;
  const edit = req.body;

  db.editProperty(houseId, edit)
    .then(updated => {
      if (updated) {
        res.status(200).json({
          message: "Property updated."
        });
      } else {
        res.status(404).json({ error: "No property found." });
      }
    })
    .catch(err => {
      next("h500", err);
    });
});

// delete property
router.delete("/:houseId", (req, res) => {
  const { houseId } = req.params;
  db.deleteProperty(houseId)
    .then(property => {
      if (property) {
        res.status(202).json({ message: "Property deleted." });
      } else {
        res
          .status(404)
          .json({ error: "The property specified does not exist." });
      }
    })
    .catch(err => {
      res.status(500).json({ error: `${err}` });
    });
});

module.exports = router;
