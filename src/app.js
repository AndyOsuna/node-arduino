const express = require('express'),
  app = express(),
  { join } = require('path'),
  morgan = require('morgan')

/* Settings */
app.set('port', process.env.PORT || 4560)
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')

/* Middlewares */
app.use(express.json())
app.use(morgan('dev'))

/* Static files */
app.use(express.static(join(__dirname, 'public')))
app.use(express.static('socket.io/socket.io.js'))

/* Routes */
app.use(require(join(__dirname, 'routes')))

module.exports = app