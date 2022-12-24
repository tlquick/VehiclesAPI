const express = require('express')
const display = require('./_displayResults')
const router = express.Router()

const select = `SELECT colour_id, colour_name FROM "Colour"`


router.get('/', async (req, res) =>{
    await display.getResults(select, res)
})
router.get('/:id', async (req, res) =>{
    const where = `WHERE "Colour".colour_id = ` + req.params.id
    await display.getResults(select + where, res)
})

module.exports = router