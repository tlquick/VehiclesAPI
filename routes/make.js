const express = require('express')
const display = require('./_displayResults')
const router = express.Router()

const select = `SELECT make_id, make_name FROM "Make"`


router.get('/', async (req, res) =>{    
     await display.getResults(select, res)
})

router.get('/:id', async (req, res) =>{
    const where = `WHERE "Make".make_id = ` + req.params.id
    await display.getResults(select + where, res)
})

module.exports = router