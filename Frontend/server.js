const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static( __dirname + '/public'))

app.use('/', indexRouter)

app.listen(process.env.PORT || 3000, () => {
    console.log('Server started on port 3000!');
})
