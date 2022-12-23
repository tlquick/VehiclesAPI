const express = require('express')
const db = require('../db/conn')
const router = express.Router()



router.get ('/', (req,res) => {
    res.send("Hey there")
})

router.get('/makes', async (req, res) =>{
    try {    
        const results = await db.getQuery(`SELECT make_id, make_name FROM "Make"`)
        res.send(results.rows)
    } catch (error) {
        console.log(error)
    }
})
router.get('/models', async (req, res) =>{
    try {    
        const results = await db.getQuery(`SELECT model_id, model_name FROM "Model"`)
        res.send(results.rows)
    } catch (error) {
        console.log(error)
    }
})
router.get('/vehicles', async (req, res) =>{
    try {    
        const results = await db.getQuery(`SELECT vehicle_id FROM "Vehicle"`)
        res.send(results.rows)
    } catch (error) {
        console.log(error)
    }
})

    

module.exports = router