// include all setting
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')

// set handlebars as view engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')