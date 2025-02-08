const express = require('express')
const router = express.Router()
const path = require('path')

router.route('^/$|/index(.html)/', (req, res) => {
    res.sendFile(path.join('..', __dirname, 'public', 'views', 'index.html'))
})

router.route('/', (req, res) => {
    res.sendFile(path.join('..', __dirname, 'public', 'views', 'index.html'))
})

module.exports = router