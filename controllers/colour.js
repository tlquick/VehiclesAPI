const db = require("../models")
const Colour = db.colours
const Op = db.Sequelize.Op
const entity = require("./entity")

// Create and Save a new Colour
exports.create = async (req, res) => {
// Validate request
if (!req.body.colour_name) {
  res.status(400).send({
    message: "Content can not be empty!"
  })
  return 
}
// Create a Colour
const colour = {
  colour_name: req.body.colour_name
}

// Save Colour in the database
Colour.create(colour)
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Colour."
    })
  })
}

// Retrieve all Colours from the database.
exports.findAll =  (req, res) => {
  entity.findAll(req, res, Colour)
}

// Find a single Colour with an id
exports.findOne =  (req, res) => {
  entity.findOne(req, res, Colour)
}

// Update a Colour by the id in the request
exports.update =  (req, res) => {
  entity.update(req, res, Colour)
}

// Delete a Colour with the specified id in the request
exports.delete =  (req, res) => {
  entity.delete(req, res, Colour)
}