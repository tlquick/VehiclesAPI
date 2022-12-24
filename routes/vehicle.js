const express = require('express')
const display = require('./_displayResults')
const router = express.Router()

const select = `SELECT "Vehicle".vehicle_id,"Make".make_name,"Model".model_name FROM "Vehicle", "Make", "Model"`
const where = `WHERE "Vehicle".make_id = "Make".make_id AND "Vehicle".model_id = "Model".model_id ` 


router.get('/', async (req, res) =>{
    await display.getResults(select + where, res)
})

router.get('/:id', async (req, res) =>{
    const andId = `AND "Vehicle".vehicle_id = ` + req.params.id
    await display.getResults(select + where + andId, res)
})

module.exports = router