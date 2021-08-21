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
  const indexCss = "index_page.css"
  res.render('index', { cssStyle: indexCss, restaurants: restaurantList.results })
})

// set the show page of restaurant
app.get('/restaurants/:storeId', (req, res) => {
  const showCss = "show_page.css"
  res.render('show', { cssStyle: showCss, })
})

// set listener on app
app.listen(port, () => {
  console.log(`This website is on "http://localhost:${port}"`)
})