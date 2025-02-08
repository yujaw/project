const express = require('express')
const router = express.Router()
const authControllers = require('../controllers/authControllers')

router.route('/')
    .post(authControllers.login)

module.exports = router