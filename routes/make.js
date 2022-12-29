const express = require('express')
const router = express.Router()

const makes = require("../controllers/make.js")

// get all Makes
router.get('/', makes.findAll)

// Create a new Make
router.post('/', makes.create)

//find a specific Make
router.get('/:id', makes.findOne)

// Update a Make with id
router.put('/:id', makes.update)

// Delete a Make with id
router.delete('/:id', makes.delete)

module.exports = router