const db = require('../db/conn')

module.exports.getResults = async (queryString, res) => {
    try {    
        const results = await db.getQuery(queryString)
        res.send(results.rows)
    } catch (error) {
        console.log(error)
    }
}
