const { Client } = require("pg")


module.exports.getQuery = async (queryString) => {
    const client = new Client({
        user: 'user',
        host: 'localhost',
        database: 'caryard',
        password: 'test',
        port: 5432
        })
    await client.connect()
    const results = await client.query(queryString)
    await client.end()
    return results
}

