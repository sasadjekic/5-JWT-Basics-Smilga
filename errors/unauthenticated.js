//uvozimo nasu klasu 
const CustomAPIError = require("./custom-error")

//ovde koristimo modul za status code - sa imenom umesto brojem - ovde destruktuiramo sta nam treba
const { StatusCodes } = require('http-status-codes')

class UnauthenticatedError extends CustomAPIError {
    constructor(message) { //statusCode) - ovo je izbaceno
      super(message)
      this.statusCode = StatusCodes.UNAUTHORIZED //ovde direktno navodimo kod greske tj constantu iz modula II case
     }
  }
  
  module.exports = UnauthenticatedError