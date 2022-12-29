const dbConfig = require("../db/conn.js")

const Sequelize = require("sequelize")
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  logging: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.makes = require("./makes.js")(sequelize, Sequelize)
db.models = require("./models.js")(sequelize, Sequelize)
db.colours = require("./colours.js")(sequelize, Sequelize)
db.vehicles = require("./vehicles.js")(sequelize, Sequelize)
db.inventory = require("./inventory.js")(sequelize, Sequelize)

db.makes.hasMany(db.vehicles)
db.vehicles.belongsTo(db.makes)

db.models.hasMany(db.vehicles)
db.vehicles.belongsTo(db.models)

db.vehicles.hasMany(db.inventory)
db.inventory.belongsTo(db.vehicles)

db.colours.hasMany(db.inventory)
db.inventory.belongsTo(db.colours)

module.exports = db;