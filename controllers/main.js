
//import Error klase iz errors foldera
const CustomAPIError = require('../errors/custom-error');

//import klase Error BadReuest vezano za drugi nacin hendlovanja gresaka - samo folder bez index.js?!
const { BadRequestError } = require('../errors')

//uvoz modula jsonwebtoken za JWT
const jwt = require('jsonwebtoken')


const login = async (req, res) => {
    const {username, password} = req.body; //destruktuiranje req.body objekta
    console.log(username, password)

    //Mongo, 
    //Joi modul- validacija
    //provera u kontroleru - OVU OPCIJU SMO OVDE IZABRALI - provera sa praznim poljima u Postmanu za email npr
    if(!username || !password) {
        //bacanje nove instance nase custom greske sa propertijima - poruka i status code
        //throw new CustomAPIError('Please provide email and password', 400)
        //Ovo menjamo sa nacinom hendlovanja preko posebnih Error klasa i http-status-codes modula
        //Dakle pozivamo tu klasu i brisemo status code jer nam netreba (vec ima u klasi)
        throw new BadRequestError('No token provided');
    }
    //neki ID ovde neki random 
    const id = new Date().getDate()

    //preporuka da payload bude male velicine - sa opcijama
    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: '30d'})

    //res.send('Fake Login/Register/Signup Route');
    res.status(200).json({msg: "user created", token})
    // { - poslat odgovor  - signed token
    //     "msg": "user created",
    //     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsInVzZXJuYW1lIjoiZCIsImlhdCI6MTY4NTA1MDAyOSwiZXhwIjoxNjg3NjQyMDI5fQ.-pDs8JBexmeCGblR7ieHgVpbyo8MEv_sGtlD4nD5X7w"
    // }
}

const dashboard = async (req, res) => {
    // console.log(req.headers)  - SVE PREBACENO U MD auth.js!
    // //Authorization
    // const authHeader = req.headers.authorization;

    // if(!authHeader || !authHeader.startsWith('Bearer ')) {
    //     throw new CustomAPIError('No token provided', 401);
    // }
    // //token sam, iz header-a
    // const token = authHeader.split(' ')[1]
    // console.log(token)

    // //Verifikacija tokena - vise nacina 
    // try {
    //    const decode = jwt.verify(token, process.env.JWT_SECRET) // ovo kao za probu da test padne "rf"
    //    console.log(decode) //{ id: 28, username: 'a', iat: 1685308222, exp: 1687900222 } 
    //    //a na osnovu ovog sto smo koristili da kreiramo token 
    //    //const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: '30d'})
    //    const luckyNumber = Math.floor(Math.random() * 100)
    //     res.status(200).json({msg: `Hello, ${decode.username}`, secret: `Here is your authorized data, your lucky number is ${luckyNumber}`})
    // } catch (error) {
    //    throw new CustomAPIError('Not authorized to access this route', 401)
    // }

    //Posto smo sve prebacili u MD u auth.js - prenosimo ovoj funkciji podatke preko REQ objekta i to preko REQ.USER
    //tako da...
    console.log(req.user)
    //const user = req.user;
    const luckyNumber = Math.floor(Math.random() * 100)  //dole: umesto decode.username ide req.user.username
    res.status(200).json({msg: `Hello, ${req.user.username}`, secret: `Here is your authorized data, your lucky number is ${luckyNumber}`})

    //const luckyNumber = Math.floor(Math.random() * 100)
    //res.status(200).json({msg: `Hello, John Doe`, secret: `Here is your authorized data, your lucky number is ${luckyNumber}`})
}

module.exports = {
    login,
    dashboard
}