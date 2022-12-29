const express = require('express')
const router = express.Router()
const models = require("../controllers/model.js")


// get all Models
router.get('/', models.findAll)

// Create a new Model
router.post('/', models.create)

//find a specific Model
router.get('/:id',  models.findOne)

// Update a Model with id
router.put('/:id', models.update)

// Delete a Model with id
router.delete('/:id', models.delete)

module.exports = router