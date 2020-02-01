const express = require('express')
const app = express()

app.set('view-engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index.ejs', { name: 'Kyle' })
})

app.get('/login', (req, res) => {
    res.render('login.ejs', { name: 'Kyle' })
})


app.listen(3000)