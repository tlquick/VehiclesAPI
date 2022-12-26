const { Client } = require("pg")
const dotenv = require("dotenv")
dotenv.config()


module.exports.getQuery = async (queryString) => {
    const client = new Client({
        user: process.env.PGUSER,
        host: process.env.PGHOST,
        database: process.env.PGDATABASE,
        password: process.env.PGPASSWORD,
        port: process.env.PGPORT
    })
    await client.connect()
    const results = await client.query(queryString)
    await client.end()
    return results
}


