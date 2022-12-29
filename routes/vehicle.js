const express = require('express')
const router = express.Router()
const vehicles = require("../controllers/vehicle.js")

// get all Vehicles
router.get('/', vehicles.findAll)

// Create a new Vehicles
router.post('/', vehicles.create)

//find a specific Vehicles
router.get('/:id',  vehicles.findOne)

// Update a Vehicles with id
router.put('/:id', vehicles.update)

// Delete a Vehicles with id
router.delete('/:id', vehicles.delete)

module.exports = router