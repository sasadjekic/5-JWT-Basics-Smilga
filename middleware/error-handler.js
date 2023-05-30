//const CustomAPIError = require('../errors/custom-error')
//ovo menjamo u tj isto je:
const { CustomAPIError } = require('../errors') 
//VSC help kaze: module "c:/Users/aca/Desktop/node-express-course/05-JWT-Basics/starter/errors/index" !!!

//uvozim omodul http-st...
const { StatusCodes } = require('http-status-codes')


const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    console.log(err)
    return res.status(err.statusCode).json({ msg: err.message })
  }
  //return res.status(500).send('Something went wrong try again later')
  //ovo menjamo tj menjamo status code 500 u nesto prema http-st... modulu
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Something went wrong try again later')
}

module.exports = errorHandlerMiddleware
