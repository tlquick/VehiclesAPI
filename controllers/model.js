const db = require("../models")
const Model = db.models
const Op = db.Sequelize.Op
const entity = require("./entity")

// Create and Save a new Model
exports.create = (req, res) => {
// Validate request
if (!req.body.model_name) {
  res.status(400).send({
    message: "Content can not be empty!"
  })
  return 
}
// Create a Model
const model = {
  model_name: req.body.model_name
}

// Save Model in the database
Model.create(model)
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Model."
    })
  })
}

// Retrieve all Models from the database.
exports.findAll = (req, res) => {
  entity.findAll(req, res, Model)
}

// Find a single Model with an id
exports.findOne = (req, res) => {
  entity.findOne(req, res, Model)
}

// Update a Model by the id in the request
exports.update = (req, res) => {
  entity.update(req, res, Model)
}

// Delete a Model with the specified id in the request
exports.delete = (req, res) => {
  entity.delete(req, res, Model)
  
}