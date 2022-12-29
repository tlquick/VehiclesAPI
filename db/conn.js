const { Client } = require("pg")
const dotenv = require("dotenv")
dotenv.config()

module.exports = {
    HOST: process.env.PGHOST,
    USER: process.env.PGUSER,
    PASSWORD: process.env.PGPASSWORD,
    DB: process.env.PGDATABASE,
    dialect: "postgres",
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }

