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

// cssStyle
const indexCss = "index_page.css"
const showCss = "show_page.css"
let foundStoresLength = true

// set the main index page
app.get('/', (req, res) => {
  res.render('index', { cssStyle: indexCss, stores: restaurantList.results, foundStoresLength })
})

// set the show page of restaurant
app.get('/restaurants/:storeId', (req, res) => {
  const store = restaurantList.results.find(function findStore(store) {
    return store.id.toString() === req.params.storeId
  })
  res.render('show', { cssStyle: showCss, store })
})

// set search route
app.get('/search', (req, res) => {
  const keyword = req.query.keyword
  const stores = restaurantList.results.filter(function filterStores(store) {
    return store.name.toLowerCase().includes(keyword.trim().toLowerCase()) || store.category.toLowerCase().includes(keyword.trim().toLowerCase())
  })
  foundStoresLength = stores.length
  res.render('index', { cssStyle: indexCss, stores, keyword, foundStoresLength })
})

// set listener on app
app.listen(port, () => {
  console.log(`This website is on "http://localhost:${port}"`)
})