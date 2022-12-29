const express = require('express')
const router = express.Router()
const colours = require("../controllers/colour.js")


// get all Colours
router.get('/', colours.findAll)

// Create a new Colour
router.post('/', colours.create)

//find a specific Colour
router.get('/:id',  colours.findOne)

// Update a Colour with id
router.put('/:id', colours.update)

// Delete a Colour with id
router.delete('/:id', colours.delete)


module.exports = router