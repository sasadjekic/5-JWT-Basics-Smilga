//import Error klase iz errors foldera
const CustomAPIError = require('../errors/custom-error');

//uvoz modula jsonwebtoken za JWT
const jwt = require('jsonwebtoken')


const authorizationMiddleware = (req, res, next) => {

    console.log(req.headers.authorization);

    //Authorization
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new CustomAPIError('No token provided', 401);
    }
    //token sam, iz header-a
    const token = authHeader.split(' ')[1]
    console.log(token)

    //Verifikacija tokena - vise nacina 
    try {
       const decode = jwt.verify(token, process.env.JWT_SECRET) // ovo kao za probu da test padne "rf"
       console.log(decode) //{ id: 28, username: 'a', iat: 1685308222, exp: 1687900222 } 
       //a na osnovu ovog sto smo koristili da kreiramo token 
       //const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: '30d'})

       //DODATO PRI PREBACIVANJU U AUTH.JS
       const {id, username} = decode;
       //BITNA STVAR!!! - PRENOSIMO REZULTAT U DRUGU FUNKCIJU PREKO REQ objekta jer sve func imaju pristup njemu!
       req.user = {id, username};
       next()
       
    } catch (error) {
       throw new CustomAPIError('Not authorized to access this route', 401)
    }


}

module.exports = authorizationMiddleware;