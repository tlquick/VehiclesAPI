const express = require('express')
const display = require('./_displayResults')
const router = express.Router()

const select = `SELECT model_id, model_name FROM "Model"`


router.get('/', async (req, res) =>{
    await display.getResults(select, res)
})

router.get('/:id', async (req, res) =>{
    const where = `WHERE "Model".model_id = ` + req.params.id
    await display.getResults(select + where, res)
})
module.exports = router