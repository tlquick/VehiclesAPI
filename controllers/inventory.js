const db = require("../models");
const Inventory = db.inventory;
const Vehicle = db.vehicles;
const Make = db.makes;
const Model = db.models;
const Colour = db.colours;
const Op = db.Sequelize.Op;
const entity = require("./entity")

// Create and Save a new Inventory
exports.create = (req, res) => {
// Validate request
if (!req.body.vehicleId || !req.body.colourId) {
  res.status(400).send({
    message: "Content can not be empty!"
  })
  return 
}
// Create a Inventory
const inventory = {
  vehicleId: req.body.vehicleId,
  colourId: req.body.colourId,
  price: req.body.price,
  sold: req.body.sold
}
// Save Inventory in the database
Inventory.create(inventory)
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Inventory."
    })
  })
}

// Retrieve all Inventory from the database using all  associations.
exports.findAll =  (req, res) => {
    Inventory.findAll({attributes: {exclude: ['createdAt', 'updatedAt','vehicleId', 'colourId']},
    include: [ { model: Vehicle, attributes: ['id'], include:[{ model: Make, attributes: ['make_name']}, 
               { model: Model, attributes: ['model_name']}]}, { model: Colour, attributes: ['colour_name']}]})
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving inventory."
        })
      })
}

// Find a single Inventory with an id
exports.findOne =  (req, res) => {
  const id = req.params.id;
  Inventory.findByPk(id, {attributes: {exclude: ['createdAt', 'updatedAt','vehicleId', 'colourId']},
  include: [ { model: Vehicle, attributes: ['id'], include:[{ model: Make, attributes: ['make_name']}, 
             { model: Model, attributes: ['model_name']}]}, { model: Colour, attributes: ['colour_name']}]} )
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find inventory with id=${id}.`
          })
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving inventory with id=" + id
        })
      })
}


// Update an Inventory by the id in the request
exports.update =  (req, res) => {
  entity.update(req, res, Inventory)
}

// Delete a Inventory with the specified id in the request
exports.delete =  (req, res) => {
  entity.delete(req, res, Inventory)
}