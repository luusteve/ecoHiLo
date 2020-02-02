const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('menu')
})

router.get('/game', (req, res) => {
    res.render('game')
})

router.get('/lose', (req, res) => {
    res.render('lose')
})

module.exports = router