const express = require('express')
const router = express.Router()

const {login, dashboard} = require('../controllers/main')

//Hendlujemo putanje sa kracim nacinom - get(func iz kontrolera)
//za rutu - /api/v1/dashboard
router.route('/dashboard').get(dashboard)
//za rutu - /api/v1/login
router.route('/login').post(login) //post metoda posto je to login

module.exports = router;