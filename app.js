const express = require('express')
const bodyParser = require("body-parser")
const app = express()

const indexRouter = require('./routes/index')
const makeRouter = require('./routes/make')
const modelRouter = require('./routes/model')
const colourRouter = require('./routes/colour')
const vehicleRouter = require('./routes/vehicle')
const inventoryRouter = require('./routes/inventory')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRouter)
app.use('/makes', makeRouter)
app.use('/models', modelRouter)
app.use('/colours', colourRouter)
app.use('/vehicles', vehicleRouter)
app.use('/inventory', inventoryRouter)

const db = require("./models")
db.sequelize.sync({ force: false, alter: true })
//db.sequelize.sync({ force: true })

module.exports = app