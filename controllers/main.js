
//import Error klase iz errors foldera
const CustomAPIError = require('../errors/custom-error');

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
        throw new CustomAPIError('Please provide email and password', 400)
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
    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({msg: `Hello, John Doe`, secret: `Here is your authorized data, your lucky number is ${luckyNumber}`})
}

module.exports = {
    login,
    dashboard
}