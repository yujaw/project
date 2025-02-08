const express = require('express')
const router = express.Router()
const userControllers = require('../controllers/userControllers')

router.route('/')
    .get(userControllers.getAllUsers)
    .post(userControllers.addNewUser)
    .delete(userControllers.removeUser)

router.route('/:id')
    .get(userControllers.getUserById)

module.exports = router