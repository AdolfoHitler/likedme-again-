const express = require('express')
let app = express()
app.use(require('./subsRouter'))
app.use(require('./subsRouter'))

module.exports = app;