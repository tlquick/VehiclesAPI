const db = require("../models")
const Make = db.makes
const Op = db.Sequelize.Op
const entity = require("./entity")

// Create and Save a new Make
exports.create = (req, res) => {
  // Validate request
  if (!req.body.make_name) {
    res.status(400).send({
      message: "Content can not be empty!"
    })
    return 
  }
  // Create a Make
  const make = {
    make_name: req.body.make_name
  }

  // Save Make in the database
  Make.create(make)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Make."
      })
    })
}

// Retrieve all Makes from the database.
exports.findAll = (req, res) => {  
  entity.findAll(req, res, Make)
}

// Find a single Make with an id
exports.findOne = (req, res) => {
    entity.findOne(req, res, Make)
}

// Update a Make by the id in the request
exports.update = (req, res) => {
    entity.update(req, res, Make)
}

// Delete a Make with the specified id in the request
exports.delete = (req, res) => {
    entity.delete(req, res, Make)
}