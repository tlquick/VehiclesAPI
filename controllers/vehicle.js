const db = require("../models");
const Vehicle = db.vehicles;
const Make = db.makes;
const Model = db.models;
const Op = db.Sequelize.Op;
const entity = require("./entity")

// Create and Save a new Vehicle
exports.create = (req, res) => {
  // Validate request
  
if (!req.body.modelId || !req.body.makeId) {
  res.status(400).send({
    message: "Content can not be empty!"
  })
  return 
}
// Create a Vehicle
const vehicle = {
  makeId: req.body.makeId,
  modelId: req.body.modelId
}
// Save Vehicle in the database
Vehicle.create(vehicle)
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Vehicle."
    })
  })
}

// Retrieve all Vehicles from the database.
exports.findAll = (req, res) => {
  
  Vehicle.findAll({attributes: {exclude: ['createdAt', 'updatedAt','modelId','makeId']},
       include: [ { model: Make, attributes: ['make_name']}, { model: Model, attributes: ['model_name']}]})
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Vehicle."
        })
      })
}

// Find a single Vehicle with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Vehicle.findByPk(id, {attributes: {exclude: ['createdAt', 'updatedAt','modelId','makeId']},
  include: [ { model: Make, attributes: ['make_name']}, { model: Model, attributes: ['model_name']}]})
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find vehicle with id=${id}.`
          })
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving vehicle with id=" + id
        })
      })
}

// Update a Vehicle by the id in the request
exports.update = (req, res) => {
  entity.update(req, res, Vehicle)
}

// Delete a Vehicle with the specified id in the request
exports.delete = (req, res) => {
  entity.delete(req, res, Vehicle)
}