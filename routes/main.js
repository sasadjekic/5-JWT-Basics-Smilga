const express = require('express')
const router = express.Router()

const {login, dashboard} = require('../controllers/main')

//uvoz MD za autorizaciju - ovde samo za dashboardd ali inace za sve koje treba rute
const authorizationMiddleware = require('../middleware/auth')

//Hendlujemo putanje sa kracim nacinom - get(func iz kontrolera)
//za rutu - /api/v1/dashboard 
//VAZNO - Bitan je redosled funkcija. Po tom redu se izvrsavaju I MD funkciju moraju u sebi da imaju NEXT()!!!
router.route('/dashboard').get(authorizationMiddleware, dashboard)
//za rutu - /api/v1/login
router.route('/login').post(login) //post metoda posto je to login

module.exports = router;