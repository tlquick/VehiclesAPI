const express = require('express')
const app = express()

const indexRouter = require('./routes/index')
const makeRouter = require('./routes/make')
const modelRouter = require('./routes/model')
const colourRouter = require('./routes/colour')
const vehicleRouter = require('./routes/vehicle')
const inventoryRouter = require('./routes/inventory')

app.use('/', indexRouter)
app.use('/makes', makeRouter)
app.use('/models', modelRouter)
app.use('/colours', colourRouter)
app.use('/vehicles', vehicleRouter)
app.use('/inventory', inventoryRouter)

module.exports = app