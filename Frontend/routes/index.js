const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/menu', (req, res) => {
    res.render('menu')
})

router.get('/lose', (req, res) => {
    res.render('lose')
})

module.exports = router