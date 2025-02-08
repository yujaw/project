const express = require('express')
const router = express.Router()
const userControllers = require('../controllers/userControllers')

router.route('/')
    .get(userControllers.getAllUsers)
    .post(userControllers.addNewUser)

router.route('/:id')
    .get(userControllers.getUserById)
    .delete(userControllers.removeUser)

module.exports = router