// include all setting
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')

// set handlebars as view engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// set static files
app.use(express.static('public'))

// import restaurant.json
const restaurantList = require('./restaurant.json')

// set the main index page
app.get('/', (req, res) => {
  const cssStyle = "index_page.css"
  res.render('index', { restaurants: restaurantList.results, cssStyle })
})

// set listener on app
app.listen(port, () => {
  console.log(`This website is on "http://localhost:${port}"`)
})