const express = require('express')
const display = require('./_displayResults')
const router = express.Router()

const select = `SELECT "Inventory".inventory_id,"Vehicle".vehicle_id,"Make".make_name,
        "Model".model_name,"Colour".colour_name FROM "Inventory", "Vehicle", "Make", "Model", "Colour" `
const where = `WHERE "Inventory".vehicle_id = "Vehicle".vehicle_id AND "Vehicle".make_id = "Make".make_id 
        AND "Vehicle".model_id = "Model".model_id AND "Inventory".colour_id = "Colour".colour_id ` 

router.get('/', async (req, res) =>{
    await display.getResults(select + where, res)
})
    
router.get('/:id', async (req, res) =>{

    const andId = `AND "Inventory".inventory_id = ` + req.params.id
    await display.getResults(select + where + andId, res)
})

module.exports = router