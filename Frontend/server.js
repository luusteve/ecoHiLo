const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static( __dirname + '/public'))

app.use('/', require('./routes/index'))
app.use('/menu', require('./routes/index'))

app.listen(process.env.PORT || 3000, () => {
    console.log('Server started on port 3000!');
})
