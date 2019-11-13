const express = require('express'),
  app = express(),
  sp = require('serialport'),
  { join } = require('path')

/* Settings */
app.set('port', process.env.PORT || 4560)

/* Middlewares */
app.use(express.json())

/* Routes */
app.use(require(join(__dirname, 'routes')))

module.exports = app