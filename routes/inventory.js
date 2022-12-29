const express = require('express')
const router = express.Router()
const inventory = require("../controllers/inventory.js")
 

// get all Inventory
router.get('/', inventory.findAll)

// Create a new Inventory
router.post('/', inventory.create)

//find a specific Inventory
router.get('/:id',  inventory.findOne)

// Update a Inventory with id
router.put('/:id', inventory.update)

// Delete a Inventory with id
router.delete('/:id', inventory.delete)


module.exports = router