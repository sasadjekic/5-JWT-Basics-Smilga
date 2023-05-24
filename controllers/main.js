



const login = async (req, res) => {
    const {username, password} = req.body; //destruktuiranje req.body objekta
    console.log(username, password)

    //Mongo, Joi - validacija
    //provera u kontroleru
    if(!username || !password) {
        
    }

    res.send('Fake Login/Register/Signup Route');
}

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({msg: `Hello, John Doe`, secret: `Here is your authorized data, your lucky number is ${luckyNumber}`})
}

module.exports = {
    login,
    dashboard
}